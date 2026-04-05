import { deepseek } from "../lib/ai";

export async function getCompletion(messages: any[]) {
  try {
    const res = await deepseek.chat.completions.create({
      model: "deepseek-chat",
      messages
    });

    return res.choices[0].message.content ?? "";
  } catch (e) {
    console.error("DeepSeek ошибка:", e);
    return "⚠️ Ошибка при обращении к DeepSeek";
  }
}