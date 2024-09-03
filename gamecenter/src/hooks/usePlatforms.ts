import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"] as const, // Provide the correct type for queryKey
    queryFn: () => apiClient.getAll({}), // Pass an empty object as the argument
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: platforms, // Provide the initial data
  });
};

export default usePlatforms;
