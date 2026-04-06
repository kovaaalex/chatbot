import { supabaseServer } from "../lib/supabase";

export async function createChat(userId: string) {
    const { data } = await supabaseServer
        .from("chats")
        .insert({ user_id: userId, title: "New Chat "})
        .select()
        .single();

    return data;
}

export async function getChats(userId: string) {
    const { data } = await supabaseServer
        .from("chats")
        .select("*")
        .eq("user_id", userId);

    return data;
}

export async function saveMessage(chatId: string, role: string, content: string) {
    await supabaseServer.from("messages").insert({
        chat_id: chatId,
        role,
        content
    });
}

export async function getMessages(chatId: string) {
    const { data } = await supabaseServer
        .from("messages")
        .select("*")
        .eq("chat_id", chatId)
        .order("created_at");

    return data || [];
}