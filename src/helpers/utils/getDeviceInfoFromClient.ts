import { viewportString, isBotString } from '@/constant/headers';
import { IncomingHttpHeaders } from 'http';

export interface DeviceInfoFromClient {
  device: string | undefined;
  isBot: boolean | undefined;
}

export const getDeviceInfoFromClient = (
  headers: IncomingHttpHeaders
): DeviceInfoFromClient => {
  if (!headers['x-middleware-rewrite'])
    throw new Error('there is no "x-middleware-rewrite"');

  let device;
  let isBot;

  if (typeof headers['x-middleware-rewrite'] === 'object') {
    // toDo: handle array case
    throw new Error('handle array case');
  } else {
    const urlFromHeaders = headers['x-middleware-rewrite'];

    const deviceQueryFromUserAgent = urlFromHeaders.slice(
      urlFromHeaders.indexOf(viewportString),
      urlFromHeaders.indexOf('&')
    );
    const isBotQueryFromUserAgent = urlFromHeaders.slice(
      urlFromHeaders.indexOf(isBotString)
    );

    device = deviceQueryFromUserAgent.split('=')[1];
    isBot = isBotQueryFromUserAgent.split('=')[1] === 'true';
  }

  return { device, isBot };
};
