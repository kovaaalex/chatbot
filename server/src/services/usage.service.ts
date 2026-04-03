import { supabaseServer } from "../lib/supabase";

export async function checkLimit(identifier: string) {
    const { data } = await supabaseServer
        .from("usage_limits")
        .select("*")
        .eq("identifier", identifier)
        .single();

    if (!data) return true;

    return data.count < 3;
}

export async function incrementUsage(identifier: string) {
    const { data } = await supabaseServer
        .from("usage_limits")
        .select("*")
        .eq("identifier", identifier)
        .single();

    if (!data) {
        await supabaseServer.from("usage_limits").insert({
            identifier,
            count: 1
        });
    } else {
        await supabaseServer
            .from("usage_limits")
            .update({ count: data.count + 1 })
            .eq("identifier", identifier);
    }
}