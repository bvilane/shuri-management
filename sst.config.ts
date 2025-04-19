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
    });
  },
});
