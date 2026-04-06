import app from "../src/index";
import { deepseek } from "../src/lib/ai";

export = (req: any, res: any) => {
    console.log("ENV CHECK:", {
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_SERVICE_ROLE_KEY ? "EXISTS" : "MISSING",
        openai: process.env.OPENAI_API_KEY ? "EXISTS" : "MISSING",
        deepseek: process.env.DEEPSEEK_API_KEY ? "EXISTS" : "MISSING"
    });

    return app(req, res);
}