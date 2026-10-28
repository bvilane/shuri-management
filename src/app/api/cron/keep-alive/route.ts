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

  const { error } = await supabase.from('contact_submissions').select('id').limit(1);
  if (error) {
    console.error('Keep-alive query failed:', error);
    return Response.json({ ok: false, error: error.message }, { status: 502 });
  }

  return Response.json({ ok: true, at: new Date().toISOString() });
}
