import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import apiClient from "../services/api-client";


const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  return useQuery<T[], Error>({
    queryKey: [endpoint, ...(deps || [])],
    queryFn: () => apiClient.get(endpoint,{...requestConfig}).then((res) => res.data.results),
  });
};

export default useData;
