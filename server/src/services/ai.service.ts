import { openai } from "../lib/ai";

export async function streamCompletion(messages: any[]) {
    try {
        const res = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages
        });

        return res.choices[0].message.content;

    } catch (error) {
        console.error("OPENAI ERROR:", error);

        return "AI is not available";
    }
}