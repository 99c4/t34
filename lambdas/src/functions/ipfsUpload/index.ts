// import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      s3: {
        bucket: '${ssm:AW5_S3_BUCKET}',
        event: 's3:ObjectCreated:*',
        rules: [
          {
            prefix: 'uploads/'
          },
          {
            suffix: '.jpg'
          }
        ],
        existing: true
      }
    }
  ],
  environment: {
    AWS_DIST_BUCKET: '${ssm:AW5_S3_BUCKET}',
    IPFS_URL: '${ssm:/ipfs/ip4_address}',
  }
};
