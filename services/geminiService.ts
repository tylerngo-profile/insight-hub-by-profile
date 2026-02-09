import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.error("API_KEY is not set in the environment variables.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || '' });

export const editImageWithGemini = async (
  base64Image: string,
  prompt: string
): Promise<string> => {
  try {
    // Ensure the base64 string doesn't contain the data URL prefix for the API call if the SDK expects raw base64
    // However, the examples often show passing data directly. 
    // We will strip the prefix if it exists just to be safe, or pass as is if SDK handles it.
    // The SDK example uses `data: base64EncodeString`.
    
    const cleanBase64 = base64Image.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');
    
    // We need to determine mimeType from the base64 string header if possible, or default to png/jpeg.
    // A simple way is to check the prefix before stripping.
    let mimeType = 'image/png';
    const match = base64Image.match(/^data:(image\/[a-zA-Z]+);base64,/);
    if (match && match[1]) {
      mimeType = match[1];
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });

    // Iterate through parts to find the image
    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData && part.inlineData.data) {
           return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }

    throw new Error("No image generated in response.");
  } catch (error) {
    console.error("Error editing image with Gemini:", error);
    throw error;
  }
};
