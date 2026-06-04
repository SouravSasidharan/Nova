import MessageBubble from "./MessageBubble";

function ChatWindow({ messages, chatEndRef }) {
  return (
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
  );
}

export default ChatWindow;