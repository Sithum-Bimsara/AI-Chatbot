const express = require("express");
const bodyParser = require("body-parser");
const { OpenAI } = require("openai");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// OpenAI Configuration
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your .env file
});

// Chat endpoint
app.post("/chat", async (req, res) => {
    const { question } = req.body;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: question }],
            max_tokens: 100, // Adjust token limit as needed
        });

        res.json({
            answer: response.choices[0].message.content,
        });
    } catch (error) {
        console.error("Error communicating with OpenAI API:", error);
        res.status(500).send("Error communicating with OpenAI API");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
