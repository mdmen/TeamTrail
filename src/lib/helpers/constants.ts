import { envPublicSchema } from '../../env/public';

export const appNamespace = 'team-trail';
export const isProduction = envPublicSchema.NODE_ENV === 'production';
