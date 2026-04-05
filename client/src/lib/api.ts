const API_URL = "https://server-pied-nine-27.vercel.app";

export async function sendMessage(data: {
  chatId: string;
  userId: string;
  message: string;
}) {
  const res = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("API error");

  return res.json();
}