import { useEffect, useState } from 'react';

interface IUseRequestResponse<Data = any, Error = any> {
  data: Data | undefined;
  error: Error | undefined;
  isLoading: boolean;
}
type FetcherResponse<Data = undefined> = Data | Promise<Data>;
type BareFetcher<Data = undefined> = (...args: any[]) => FetcherResponse<Data>;

export default function useRequest<Data = undefined, Error = undefined>(
  fetcher: BareFetcher<Data>,
  wait = false
): IUseRequestResponse<Data, Error> {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Data>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (!wait) {
      const func = async (): Promise<void> => {
        setLoading(true);
        try {
          const data = await fetcher();
          setData(data);
        } catch (error) {
          console.log(error);
          setError(error as any);
        } finally {
          setLoading(false);
        }
      };
      void func();
    }
  }, [wait]);

  return { isLoading: loading, data, error };
}
