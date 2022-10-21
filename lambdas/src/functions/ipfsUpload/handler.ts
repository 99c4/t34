import {create} from 'ipfs-http-client'
const aws = require('aws-sdk');

const s3 = new aws.S3({ apiVersion: '2006-03-01' });

const handler = async (event, context) => {
    const ipfsURL = process.env.IPFS_URL    
    console.log("ipfsURL:: ", ipfsURL)
    
};

export const main = handler;