
export interface Config {
  analyticsId: string;
  test: string;
}

export const getConfig = (): Config => {
  return {
    analyticsId: process.env.ANALYTICS_ID || '',
    test: process.env.TEST || ''
  }
};
