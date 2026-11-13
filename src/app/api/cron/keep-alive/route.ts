import { NextRequest } from 'next/server';
import { getSupabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Daily Vercel cron. Runs a real query so Supabase counts the project as active
// and does not pause it on the free tier. The admin app shares this project.
export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) {
    return Response.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = getSupabase();
  if (!supabase) {
    return Response.json({ ok: false, error: 'Supabase not configured' }, { status: 500 });
  }

  // One read per table: a single tiny query a day was not enough for Supabase to
  // count the project as active (pause warning 2026-11-12).
  const tables = ['contact_submissions', 'lead_submissions', 'newsletter_subscribers'];
  const results = await Promise.all(
    tables.map((table) => supabase.from(table).select('id').limit(1))
  );
  const failed = results.flatMap((r, i) => (r.error ? [`${tables[i]}: ${r.error.message}`] : []));
  if (failed.length > 0) {
    console.error('Keep-alive query failed:', failed);
    return Response.json({ ok: false, errors: failed }, { status: 502 });
  }

  return Response.json({ ok: true, at: new Date().toISOString() });
}
