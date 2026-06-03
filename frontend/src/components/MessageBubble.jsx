function MessageBubble({ msg }) {
  const isUser = msg.sender === "user";

  return (
    <div
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
}

export default MessageBubble;