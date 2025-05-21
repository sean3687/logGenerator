// OpenAI Chat completion client

import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface ChatCompletionParams {
  systemPrompt: string;
  userPrompt: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

export const createChatCompletion = async ({
  systemPrompt,
  userPrompt,
  model = 'gpt-4',
  temperature = 0.7,
  maxTokens = 1000,
}: ChatCompletionParams) => {
  try {
    const completion = await openai.chat.completions.create({
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature,
      max_tokens: maxTokens,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error in OpenAI chat completion:', error);
    throw error;
  }
};




