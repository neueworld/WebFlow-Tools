async function generateSummary(apiKey, text) {
  const prompt = `Please summarize the following text: ${text}`;
  const data = {
    prompt: prompt,
    max_tokens: 50, // Adjust this number based on the desired summary length
  };

  const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result.choices[0].text.trim();
}
