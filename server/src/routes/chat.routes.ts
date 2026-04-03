import { Router } from "express";
import {
    saveMessage,
    getMessages
} from "../services/chat.service";

import {
    checkLimit,
    incrementUsage
} from "../services/usage.service";

import { streamCompletion } from "../services/ai.service";

const router = Router();

router.post("/", async (req, res) => {
    try {
        const { chatId, message, userId } = req.body;

        const allowed = await checkLimit(userId);

        if (!allowed) {
            return res.status(403).json({ error: "Limit reached" });
        }

        await saveMessage(chatId, "user", message);

        const history = await getMessages(chatId);

        const reply = await streamCompletion(
            history.map(m => ({
                role: m.role,
                content: m.content
            }))
        ) || "Empty response";

        await saveMessage(chatId, "assistant", reply);
        await incrementUsage(userId);

        return res.json({ reply });

    } catch (error) {
        console.error("CHAT ERROR:", error);

        return res.status(500).json({
            error: "Something went wrong"
        });
    }
});

export default router;