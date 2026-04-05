import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import { useChat } from "./hooks/useChat";

export default function App() {
  const { messages, send, loading } = useChat();

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <ChatWindow messages={messages} />

        <ChatInput
          loading={loading}
          onSend={(message: string) =>
            send({
              chatId: "test-chat",
              userId: "test-user",
              message
            })
          }
        />
      </div>
    </div>
  );
}