import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<Platform[]>({
    queryKey: ["platforms"],
    queryFn: async () => {
      try {
        const response = await apiClient.get("/platforms/lists/parents");
        return response.data.results;
      } catch (error) {
        throw new Error("Failed to fetch platforms");
      }
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default usePlatforms;
