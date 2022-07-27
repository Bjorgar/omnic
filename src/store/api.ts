export interface Api {
  baseUrl: string;
  deviceInfo: (uid: string) => string;
  cellInfo: (uid: string) => string;
}

export const api: Api = {
  baseUrl: process.env.API as string,
  deviceInfo: (uid: string) => `api/2.0.0/public/device/${uid}/`,
  cellInfo: (uid: string) => `api/2.0.0/public/orders/device/${uid}/cells/statuses/?type=5`,
};
