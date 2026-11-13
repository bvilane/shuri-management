import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Shuri Management Group: we manage and market safari lodges';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const [photo, logo] = await Promise.all([
    readFile(join(process.cwd(), 'public/images/site/camp-sunset.jpg')),
    readFile(join(process.cwd(), 'public/images/smg.png')),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`;
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#2e221a' }}>
        <div
          style={{
            width: '58%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 56px',
            background: '#faf6ef',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={250} height={75} alt="" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 64, lineHeight: 1.08, color: '#2e221a', fontWeight: 700 }}>
              We Manage &amp; Market Safari Lodges
            </div>
            <div style={{ marginTop: 24, fontSize: 28, color: '#825c40' }}>
              Lodge management, marketing, reserves and safari tech
            </div>
          </div>
          <div style={{ fontSize: 22, color: '#6b4a33' }}>shurimanagement.com</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photoSrc} width={504} height={630} alt="" style={{ objectFit: 'cover' }} />
      </div>
    ),
    size,
  );
}
