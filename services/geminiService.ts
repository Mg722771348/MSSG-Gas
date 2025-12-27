import { GoogleGenAI } from "@google/genai";

/**
 * General heating advice for the chat assistant
 */
export const getHeatingAdvice = async (query: string) => {
  // Always use process.env.API_KEY directly for initialization as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: query,
    config: {
      systemInstruction: `You are an expert heating assistant for MSSG Gas And Electrical Services Ltd. 
      Company: Based in Portsmouth and Southampton (UK).
      Gas Safe Registered: 531530.
      Specialists: Vaillant and Glowworm boilers.
      Voice: Helpful, professional, and safety-conscious.
      Important: Always tell users that only Gas Safe engineers should open a boiler.
      Goal: Help with error codes and encourage using the contact form for a professional quote.`,
    },
  });

  return response.text;
};

/**
 * Specialized diagnostic info for error codes
 */
export const getDiagnosticInfo = async (brand: string, code: string) => {
  // Always use process.env.API_KEY directly for initialization as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `A user has a ${brand} boiler displaying error code "${code}". 
  Provide a simple, non-technical explanation for a homeowner.
  State clearly if it is a "User Fix" or an "Engineer Required" issue.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      systemInstruction: "You are a boiler technical expert. Be concise and prioritize safety.",
    },
  });

  return response.text;
};

/**
 * Optimizes the user's inquiry message to be more useful for the engineer
 */
export const optimizeInquiry = async (message: string) => {
  // Always use process.env.API_KEY directly for initialization as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Rewrite this customer message into a clear, professional service request: "${message}"`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      systemInstruction: "Refine customer messages to be professional and technical for a gas engineer's work order.",
    },
  });

  return response.text;
};

/**
 * Generates high-quality system images using gemini-3-pro-image-preview
 */
export const generateSystemImage = async (prompt: string, size: '1K' | '2K' | '4K') => {
  // Always create a new instance right before use for paid models to ensure latest API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-image-preview',
    contents: {
      parts: [
        {
          text: `Photorealistic high-quality architectural and engineering photograph of: ${prompt}. Clean, professional, well-lit, industrial design aesthetic.`,
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
        imageSize: size
      },
      // Using googleSearch as it's available for this model to improve realism/context
      tools: [{ googleSearch: {} }],
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    // Find the image part, do not assume it is the first part.
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  
  throw new Error("No image was generated in the response.");
};