import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini if key exists
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  } else {
    console.warn("GEMINI_API_KEY environment variable is not defined.");
  }

  // API Chat Endpoint for Jewelora Assistant
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      if (!ai) {
        return res.status(503).json({ 
          error: "Gemini AI assistant is not fully configured yet. Please configure the GEMINI_API_KEY in Secrets." 
        });
      }

      const systemInstruction = `You are "Elara", Jewelora's personal concierge and modern virtual gemologist.
Your character is elegant, articulate, highly knowledgeable in fine gold crafts, and welcoming.
You speak in a warm, premium tone that represents Jewelora, an elite direct-to-consumer modern gold jewelry house (112 years heritage via legacy ancestors).
Help users find the perfect wedding bands, stacking earrings, custom pendants, and gifts.
Explain carat differences (such as 18 karat solid gold vs 22 karat), ethically sourced materials, lifetime resale guarantees, and custom curation guides.
Format responses with beautiful readable spacing, brief bullet-points for listing choices, and keep answers concise and easy to read.`;

      const chat = ai.chats.create({
        model: "gemini-3.5-flash",
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      const response = await chat.sendMessage({ message: message });
      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error?.message || "Internal server error" });
    }
  });

  // Serve static storefront or development assets using Vite
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server", err);
});
