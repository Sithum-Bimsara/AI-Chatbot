
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

1. Navigate to the `server` folder:

```bash
cd server
```

2. Install backend dependencies:

```bash
npm install
```

3. Create a `.env` file in the `server` directory and add your OpenAI API key:

```bash
OPENAI_API_KEY=your_openai_api_key
```

### Step 3: Set up the frontend

1. Navigate to the `client` folder:

```bash
cd chatbot-ui
```

2. Install frontend dependencies:

```bash
npm install
```

### Step 4: Start the backend and frontend

1. Run the backend server:

```bash
cd server
node index.js
```

The backend server will start on `http://localhost:5000`.

2. Run the frontend server:

```bash
cd client
npm start
```

The frontend server will start on `http://localhost:5173` (or the port shown in your terminal).

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Type your question in the input field and click "Send."
3. Wait for the AI to respond. The answer will be displayed below the input field.

## API Reference

### POST `/chat`

- **Request Body**:
  - `question`: The user's input text.

- **Response**:
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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
