import { GoogleGenAI } from "@google/genai";

/**
 * Technical guidance for customers using Gemini 3 Flash
 */
export const getHeatingAdvice = async (query: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: query,
    config: {
      systemInstruction: `You are an expert technical consultant for MSSG Gas And Electrical Services Ltd.
      Focus: Vaillant and Glowworm boilers.
      Voice: Highly professional, direct, and safety-oriented.
      Strict Safety: Always emphasize that boiler casings should only be removed by Gas Safe engineers.
      Context: We serve the South Coast (Portsmouth/Southampton).`,
    },
  });

  return response.text;
};

/**
 * High-fidelity system visualization using Nano Banana Pro
 */
export const generateSystemImage = async (prompt: string, size: '1K' | '2K' | '4K') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-image-preview',
    contents: {
      parts: [
        {
          text: `Professional engineering schematic and photograph: ${prompt}. Cinematic lighting, technical blueprint aesthetic, industrial quality.`,
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
        imageSize: size
      }
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error("Visualization engine failed to render output.");
};

/**
 * Optimizes user messages for technical work orders
 */
export const optimizeInquiry = async (message: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Translate this homeowner issue into a professional technical service request: "${message}"`,
    config: {
      systemInstruction: "Convert messy descriptions into structured engineering work orders. Focus on technical terms (e.g., flow rate, heat exchanger, PCB).",
    },
  });

  return response.text;
};

/**
 * Direct diagnostic lookup for boiler error codes
 */
export const getDiagnosticInfo = async (brand: string, code: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Identify ${brand} boiler code: ${code}. Simple fix or Engineer needed?`,
    config: {
      systemInstruction: "Provide a 2-sentence safety-first explanation of the error code.",
    },
  });

  return response.text;
};