function ChatInput({
  message,
  setMessage,
  handleSend,
}) {
  return (
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
  );
}

export default ChatInput;