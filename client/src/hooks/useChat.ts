import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "../lib/api";

export function useChat() {
  const [messages, setMessages] = useState<any[]>([]);

  const mutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: (data, variables) => {
      setMessages(prev => [
        ...prev,
        { role: "user", content: variables.message },
        { role: "assistant", content: data.reply }
      ]);
    }
  });

  return {
    messages,
    send: mutation.mutate,
    loading: mutation.isPending
  };
}