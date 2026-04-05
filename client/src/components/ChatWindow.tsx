export default function ChatWindow({ messages = [] }: any) {
  return (
    <div className="flex-1 overflow-auto space-y-4">
      {messages.map((m: any, i: number) => (
        <div
          key={i}
          className={`p-3 rounded-xl max-w-xl ${
            m.role === "user"
              ? "bg-blue-500 text-white ml-auto"
              : "bg-gray-200"
          }`}
        >
          {m.content}
        </div>
      ))}
    </div>
  );
}