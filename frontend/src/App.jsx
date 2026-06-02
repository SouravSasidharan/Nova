import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
  if (message.trim() === "") return;

  let response = "";

  if (message.toLowerCase().includes("java")) {
    response = "Java is an object-oriented programming language.";
  } else if (message.toLowerCase().includes("python")) {
    response = "Python is a beginner-friendly and versatile language.";
  } else if (message.toLowerCase().includes("c")) {
    response = "C is a procedural programming language known for its speed.";
  } else {
    response = "I'm not sure about that yet. Try asking about Java, C, or Python.";
  }

    setMessages([
      ...messages,
      {
        sender: "user",
        text: message,
      },
      {
        sender: "nova",
        text: response,
      },
    ]);

  setMessage("");
};

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1>Nova</h1>
      <p>Your AI Coding Companion</p>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          height: "450px",
          padding: "15px",
          overflowY: "auto",
          marginBottom: "15px",
        }}
      >
        {messages.length === 0 && (
          <p>👋 Hi! Ask me anything about Java, C, or Python.</p>
        )}

        {messages.map((msg, index) => {
  const isUser = msg.sender ==="user";

  return (
    <div
      key={index}
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: isUser ? "#007bff" : "#e5e5e5",
          color: isUser ? "white" : "black",
          padding: "10px",
          borderRadius: "10px",
          maxWidth: "70%",
        }}
      >
        {msg.text}
      </div>
    </div>
  );
})}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
          <input
      type="text"
      placeholder="Ask Nova a coding question..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSend();
        }
      }}
    />

        <button onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;