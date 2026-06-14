// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'shuri-management',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
    };
  },
  async run() {
    new sst.aws.Nextjs('ShuriManagement', {
      domain: {
        name: 'shurimanagement.com',
        redirects: ['www.shurimanagement.com'],
        dns: sst.cloudflare.dns({
          zone: '6d867e91e68d8b8ab2827c1803a23f93',
        }),
      },
      environment: {
        GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
        GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
        SMTP_NAME: process.env.SMTP_NAME,
        SMTP_MAIL: process.env.SMTP_MAIL,
        SMTP_REPLY_TO: process.env.SMTP_REPLY_TO,
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_USERNAME: process.env.SMTP_USERNAME,
        SMTP_PASSWORD: process.env.SMTP_PASSWORD,
        RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
      },
    });
  },
});
