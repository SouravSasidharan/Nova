import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() === "") return;

    setMessages([
      ...messages,
      `You: ${message}`,
      `Nova: I'm still learning. Soon I'll answer coding questions!`,
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

        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            {msg}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Ask Nova a coding question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
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