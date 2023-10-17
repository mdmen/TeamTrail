import { envCommonSchema } from '../../env/common';

export const appNamespace = 'team-trail';
export const isProduction = envCommonSchema.NODE_ENV === 'production';
