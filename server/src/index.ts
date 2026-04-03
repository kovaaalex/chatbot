import express from "express";
import cors from "cors";

import chatRoutes from "./routes/chat.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.get("/health", (req, res) => {
    console.log("Chat Bot is available");
    res.json({ ok: true });
});
app.use("/api/chat", chatRoutes);

export default app;