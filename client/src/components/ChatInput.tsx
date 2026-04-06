import { useState } from "react";

export default function ChatInput({ onSend, loading }: any) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="p-4 flex gap-2 border-t">
      <input
        className="flex-1 border rounded p-2"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        onClick={handleSend}
        disabled={loading}
        className="bg-black text-white px-4 rounded"
      >
        Send
      </button>
    </div>
  );
}