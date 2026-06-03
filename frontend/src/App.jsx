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

if (userMessage.includes("java")) {
  response = "Java is an object-oriented programming language used for building applications.";
}
else if (userMessage.includes("python")) {
  response = "Python is known for its simple syntax and versatility.";
}
else if (userMessage.includes("c")) {
  response = "C is a fast procedural programming language widely used in systems programming.";
}
else if (userMessage.includes("recursion")) {
  response = "Recursion is a technique where a function calls itself to solve smaller instances of a problem.";
}
else if (userMessage.includes("array")) {
  response = "An array stores multiple values of the same type in contiguous memory locations.";
}
else if (userMessage.includes("linked list")) {
  response = "A linked list is a linear data structure where each node points to the next node.";
}
else if (userMessage.includes("stack")) {
  response = "A stack follows the LIFO principle: Last In, First Out.";
}
else if (userMessage.includes("queue")) {
  response = "A queue follows the FIFO principle: First In, First Out.";
}
else if (userMessage.includes("oop")) {
  response = "OOP stands for Object-Oriented Programming and is based on classes and objects.";
}
else {
  response = "I don't know that topic yet. Try asking about Java, Python, C, Arrays, Linked Lists, Stacks, Queues, Recursion, or OOP.";
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
          backgroundColor: isUser ? "#2563eb" : "#2d2d2d",
          color: "white",
          padding: "10px",
          borderRadius: "10px",
          maxWidth: "70%",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }}
      >
        {msg.text}
      </div>
    </div>
  );
})}
      <div ref={chatEndRef}></div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          borderTop: "1px solid #333",
          paddingTop: "15px",
        }}
      >
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

      style={{
        flex: 1,
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #333",
        backgroundColor: "#2d2d2d",
        color: "white",
      }}
    />

        <button
          onClick={handleSend}
          style={{
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;