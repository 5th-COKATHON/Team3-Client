import { api } from './axios';

export const fetcher = async (url: string) => {
  return api.get(url).then((res: { data: any }) => res.data);
};
