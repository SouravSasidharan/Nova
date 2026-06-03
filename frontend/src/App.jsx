import { responses } from "./data/responses";
import MessageBubble from "./components/MessageBubble";
import ChatInput from "./components/ChatInput";
import { useState, useRef, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
  chatEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
  }, [messages]);

  const handleSend = () => {
  if (message.trim() === "") return;

  let response = "";

  const userMessage = message.toLowerCase();

  let found = false;

  for (const keyword in responses) {
    if (userMessage.includes(keyword)) {
      response = responses[keyword];
      found = true;
      break;
    }
  }

  if (!found) {
    response =
      "I don't know that topic yet. Try asking about Java, Python, C, Arrays, Linked Lists, Stacks, Queues, Recursion, or OOP.";
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
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#121212",
        color: "white",
        padding: "20px",
        fontFamily: "Arial",
    }}
    >
      <div
        style={{
          borderBottom: "1px solid #333",
          paddingBottom: "10px",
          marginBottom: "15px",
        }}
      >
        <h1>Nova</h1>
        <p>AI Coding Companion for Java, C, and Python</p>
      </div>

      <div
        style={{
          border: "1px solid #333",
          borderRadius: "10px",
          flex: 1,
          padding: "15px",
          overflowY: "auto",
          marginBottom: "15px",
          backgroundColor: "#1e1e1e",
}}
      >
        {messages.length === 0 && (
          <p>👋 Hi! Ask me anything about Java, C, or Python.</p>
        )}

        {messages.map((msg, index) => (
          <MessageBubble key={index} msg={msg} />
        ))}

      <div ref={chatEndRef}></div>
      </div>

      <ChatInput
        message={message}
        setMessage={setMessage}
        handleSend={handleSend}
      />
    </div>
  );
}

export default App;