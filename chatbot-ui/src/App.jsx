import React, { useState } from "react";
import axios from "axios";

const App = () => {
    const [question, setQuestion] = useState("");
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await axios.post("http://localhost:5000/chat", { question });
            setResponse(res.data.answer);
            setQuestion(""); // Clear the input field
        } catch (error) {
            console.error("Error:", error);
            setResponse("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(to right, #6a11cb, #2575fc)",
                fontFamily: "'Poppins', sans-serif",
                padding: "20px",
            }}
        >
            <div
                style={{
                    background: "white",
                    borderRadius: "10px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    padding: "30px",
                    maxWidth: "500px",
                    width: "100%",
                }}
            >
                <h1
                    style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#333",
                        marginBottom: "20px",
                        textAlign: "center",
                    }}
                >
                    AI Chatbot
                </h1>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Ask me anything..."
                        style={{
                            padding: "15px",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            fontSize: "16px",
                            outline: "none",
                            transition: "border-color 0.3s",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#2575fc")}
                        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: "15px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            background: "linear-gradient(to right, #6a11cb, #2575fc)",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            transition: "transform 0.2s",
                        }}
                        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                    >
                        {isLoading ? "Sending..." : "Send"}
                    </button>
                </form>
                {response && (
                    <div
                        style={{
                            marginTop: "20px",
                            background: "#f1f1f1",
                            padding: "15px",
                            borderRadius: "8px",
                            fontSize: "16px",
                            color: "#333",
                        }}
                    >
                        <p>
                            <strong>AI:</strong> {response}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
