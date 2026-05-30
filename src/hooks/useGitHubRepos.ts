import { useQuery } from '@tanstack/react-query';
import type { GitHubRepo } from '../types/github';

// Stub — returns mock data. Wire up live fetch when ready.
const MOCK_REPOS: GitHubRepo[] = [];

export const useGitHubRepos = (_username?: string) => {
  return useQuery<GitHubRepo[]>({
    queryKey: ['github-repos', _username],
    queryFn: () => Promise.resolve(MOCK_REPOS),
    staleTime: Infinity,
  });
};
