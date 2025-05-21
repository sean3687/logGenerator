import { getCommitHistoryData } from "./githubService";
import { createChatCompletion } from "../utils/openAI";
import { systemPrompt } from "../prompt/changelog";
import { updateSessionStatus } from "./sessionService";

export const generateChangelog = async (sessionId: string, repoUrl: string, startDate: string, endDate: string) => {
  try {
    await updateSessionStatus(sessionId, 'in-progress');
    
    const commits = await getCommitHistoryData(repoUrl, startDate, endDate);
    try {
      const changelog = await createChatCompletion({
        systemPrompt: systemPrompt(startDate, endDate, repoUrl),
        userPrompt: `Generate a changelog for the following commits: ${commits.map(commit => `${commit.message} - ${commit.author}`).join("\n")}`,
      });

      await updateSessionStatus(sessionId, 'complete', changelog);
      return changelog;
    } catch (error: any) {
      if (error.message?.includes('quota') || error.message?.includes('billing')) {
        await updateSessionStatus(sessionId, 'error', 'OpenAI API quota exceeded. Please check your billing status.');
        throw new Error('OpenAI API quota exceeded. Please check your billing status.');
      }
      throw error;
    }
  } catch (error) {
    await updateSessionStatus(sessionId, 'error');
    throw error;
  }
};

