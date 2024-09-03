import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"] as const, // Provide the correct type for queryKey
    queryFn: () => apiClient.getAll, // Make sure to call the function
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: {
      count: platforms.length,
      results: platforms,
    },
  });
};

export default usePlatforms;
