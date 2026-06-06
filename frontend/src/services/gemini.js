import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function askGemini(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
You are Nova, an AI coding assistant.

Your specialties are:
- Java
- Python
- C

Rules:
- Be beginner friendly.
- Explain concepts clearly.
- Give examples whenever possible.
- If code is requested, provide properly formatted code.
- Keep answers concise unless the user asks for more detail.

User Question:
${prompt}
`,
  });

  return response.text;
}