import { useQuery } from "@tanstack/react-query";

// Mock implementation hooks for the API structure if needed
// For a static portfolio, we don't strictly need external fetchers
// but keeping the TanStack query pattern as requested

export interface ProjectStats {
  views: number;
  likes: number;
}

export function useProjectStats(projectId: string) {
  return useQuery({
    queryKey: ['project-stats', projectId],
    queryFn: async () => {
      // Mock fetch
      return new Promise<ProjectStats>((resolve) => {
        setTimeout(() => {
          resolve({ views: Math.floor(Math.random() * 1000), likes: Math.floor(Math.random() * 100) });
        }, 500);
      });
    },
    staleTime: 60000,
  });
}
