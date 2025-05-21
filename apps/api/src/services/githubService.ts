// controllers/githubController.ts
import { Request, Response } from 'express';
import axios from 'axios';
import { parseGitHubRepoUrl } from '../utils/parseRepoUrl';

// const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Use your token
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export const getCommitHistoryData = async (repoUrl: string, startDate: string, endDate: string) => {
  const { owner, repo } = parseGitHubRepoUrl(repoUrl);

  const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
    },
    params: {
      since: new Date(startDate).toISOString(),
      until: new Date(endDate).toISOString(),
      per_page: 100,
    },
  });

  return response.data.map((commit: any) => ({
    sha: commit.sha,
    author: commit.commit.author.name,
    date: commit.commit.author.date,
    message: commit.commit.message,
  }));
};

export const getCommitHistory = async (req: Request, res: Response) => {
  const { repoUrl, startDate, endDate } = req.body;

  if (!repoUrl || !startDate || !endDate) {
    return res.status(400).json({ error: 'repoUrl, startDate, and endDate are required' });
  }

  try {
    const commits = await getCommitHistoryData(repoUrl, startDate, endDate);
    res.json(commits);
  } catch (err: any) {
    res.status(500).json({ error: err.response?.data?.message || err.message });
  }
};
