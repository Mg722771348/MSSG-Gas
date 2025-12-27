import { GoogleGenAI } from "@google/genai";

// Standard way to access the API key as per instructions, 
// handled by Vite's define or Netlify's environment variables.
const getApiKey = () => {
  return process.env.API_KEY || '';
};

/**
 * General heating advice for the chat assistant
 */
export const getHeatingAdvice = async (query: string) => {
  const ai = new GoogleGenAI({ apiKey: getApiKey() });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: query,
    config: {
      systemInstruction: `You are an expert heating assistant for MSSG Gas And Electrical Services Ltd. 
      The company is based in Portsmouth and Southampton (UK), Gas Safe Registered (531530).
      Specialists in Vaillant and Glowworm boilers.
      Provide helpful, safe, and professional heating advice. 
      Always emphasize that only Gas Safe engineers should open a boiler.
      Mention that the user can get a quote via the form on this site.`,
    },
  });

  return response.text;
};

/**
 * Specialized diagnostic info for error codes
 */
export const getDiagnosticInfo = async (brand: string, code: string) => {
  const ai = new GoogleGenAI({ apiKey: getApiKey() });
  const prompt = `A user has a ${brand} boiler displaying error code "${code}". 
  Provide a simple, non-technical explanation of what this might mean for a homeowner.
  Indicate if it's a "User Fix" (like low pressure) or an "Engineer Required" issue.
  Be concise.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      systemInstruction: "You are a technical diagnostic assistant. Be helpful but prioritize safety. If an engineer is needed, state it clearly.",
    },
  });

  return response.text;
};

/**
 * Optimizes the user's inquiry message to be more useful for the engineer
 */
export const optimizeInquiry = async (message: string) => {
  const ai = new GoogleGenAI({ apiKey: getApiKey() });
  const prompt = `Take the following customer message and rewrite it to be a clear, professional service request for a gas engineer. Include any technical details mentioned and structure it clearly.
  
  Original Message: "${message}"`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      systemInstruction: "You are an AI assistant that refines customer service requests. Keep it professional and helpful.",
    },
  });

  return response.text;
};