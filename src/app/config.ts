
export interface Config {
  analyticsId: string;
}

export const getConfig = (): Config => {
  return {
    analyticsId: process.env.ANALYTICS_ID || '',
  }
};
