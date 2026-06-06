import { responses } from "./data/responses";
import ChatInput from "./components/ChatInput";
import ChatWindow from "./components/ChatWindow";
import { askGemini } from "./services/gemini";
import { useState, useRef, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
  chatEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
  }, [messages]);

  const handleSend = async () => {
  if (message.trim() === "") return;

  let response = "";

  setLoading(true);

  try {
    response = await askGemini(message);
  } catch (error) {
    console.error(error);

    if (error.message?.includes("429")) {
      response =
        "Nova is temporarily rate-limited. Please wait about a minute and try again.";
    } else {
      response =
        "Sorry, Nova couldn't reach the AI service right now.";
    }
  } finally {
    setLoading(false);
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

      <ChatWindow
        messages={messages}
        chatEndRef={chatEndRef}
        loading={loading}
      />

      <ChatInput
        message={message}
        setMessage={setMessage}
        handleSend={handleSend}
      />
    </div>
  );
}

export default App;