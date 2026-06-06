export async function askOpenRouter(prompt) {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "nvidia/llama-3.1-nemotron-ultra-253b-v1:free",
        messages: [
          {
            role: "system",
            content:
              "You are Nova, an AI coding assistant specializing in Java, Python and C. Give beginner-friendly explanations.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    }
  );

  const data = await response.json();

    console.log(data);

    if (!response.ok) {
  console.error(data);
  throw new Error(data.error?.message || "OpenRouter request failed");
    }

    return data.choices[0].message.content;
}