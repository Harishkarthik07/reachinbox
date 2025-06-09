const OpenAI = require("openai");
const openai = new OpenAI();

async function suggestReply(emailText, context) {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You're a helpful assistant that crafts replies to emails based on context." },
      { role: "user", content: context + "\nEMAIL:\n" + emailText }
    ]
  });
  return response.choices[0].message.content;
}

module.exports = { suggestReply };
