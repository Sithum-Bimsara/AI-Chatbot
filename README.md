
# AI-Chatbot

A simple chatbot application that integrates OpenAI's GPT-3.5 model with a Node.js backend and React frontend. This project provides an interactive user interface for chatting with the AI, allowing real-time communication through a RESTful API.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [API Reference](#api-reference)
- [License](#license)

## Project Overview

This AI Chatbot application allows users to ask questions and receive responses powered by OpenAI's GPT-3.5 language model. The app consists of two main parts:

- **Backend (Node.js)**: The backend handles communication with OpenAI's API and serves the chatbot data.
- **Frontend (React)**: The frontend provides an interactive interface for users to enter their questions and view the AI's responses.

The chatbot is built on a simple web interface, where users can submit text input and get answers directly from the AI.

## Technologies Used

**Backend:**
- Node.js
- Express
- OpenAI SDK
- CORS middleware
- dotenv for environment variables

**Frontend:**
- React.js
- Axios for HTTP requests
- JSX for UI components

**Others:**
- OpenAI's GPT-3.5 (via OpenAI API)

## Features
- Real-time AI-powered chatbot powered by OpenAI GPT-3.5.
- User-friendly interface built with React.
- Backend communication with OpenAI API via RESTful services.
- Simple form-based input for submitting questions to the chatbot.
- Lightweight design, making it easy to deploy and use.

## Installation Instructions

### Step 1: Clone the repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Sithum-Bimsara/AI-Chatbot.git
```

### Step 2: Set up the backend

Navigate to the server folder:

```bash
cd server
```

Install backend dependencies:

```bash
npm install
```

Create a .env file in the server directory and add your OpenAI API key. The .env file should contain the following line:

```bash
OPENAI_API_KEY=your_openai_api_key
```

Replace your_openai_api_key with your actual OpenAI API key.

Start the backend server:

```bash
node index.js
```

The backend server will start on http://localhost:5000.

### Step 3: Set up the frontend

Navigate to the client folder:

```bash
cd chatbot-ui
```

Install frontend dependencies:

```bash
npm install
```

Start the frontend server:

```bash
npm run dev
```

The frontend server will start on http://localhost:5173 (or the port shown in your terminal).

## Usage

- Open your browser and navigate to http://localhost:5173.
- Type your question in the input field and click "Send."
- Wait for the AI to respond. The answer will be displayed below the input field.

## API Reference

### POST /chat

Request Body:

- `question`: The user's input text.

Response:

- `answer`: The AI's response to the question.

Example request body:

```json
{
  "question": "What is the capital of France?"
}
```

Example response:

```json
{
  "answer": "The capital of France is Paris."
}
```
## Screenshots

### Chatbot Interface
![Chatbot Interface](screenshots/chatbot-ui.png)

### Example Chat
![Example Chat](screenshots/example-chat(1).png)
![Example Chat](screenshots/example-chat(2).png)
![Example Chat](screenshots/example-chat(3).png)



## License

This project is licensed under the MIT License - see the LICENSE file for details.
