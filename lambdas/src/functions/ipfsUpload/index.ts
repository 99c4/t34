// import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [],
  environment: {
    IPFS_URL: '${ssm:/ipfs/ip4_address}',
  }
};
