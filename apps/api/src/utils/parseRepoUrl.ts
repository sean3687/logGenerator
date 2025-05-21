// utils/parseRepoUrl.ts
export const parseGitHubRepoUrl = (url: string): { owner: string; repo: string } => {
    const match = url.match(/github\.com\/([^/]+)\/([^/]+?)(?:\.git|\/)?$/);
    if (!match) throw new Error('Invalid GitHub URL');
    return { owner: match[1], repo: match[2] };
  };
  