"use server";

import { createSupabaseServerClient } from "@/app/lib/supabase-server";

export async function addItem(formData: FormData) {
  const name = formData.get("name") as string;
  const quantity = Number(formData.get("quantity"));

  const supabase = await createSupabaseServerClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  await supabase.from("items").insert({
    name,
    quantity,
    user_id: user.id,
  });
}

export async function deleteItem(formData: FormData) {
  const id = Number(formData.get("id"));

  const supabase = await createSupabaseServerClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  await supabase
    .from("items")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);
}

export async function updateItem(formData: FormData) {
  const id = Number(formData.get("id"));
  const name = formData.get("name") as string;
  const quantity = Number(formData.get("quantity"));

  const supabase = await createSupabaseServerClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  await supabase
    .from("items")
    .update({ name, quantity })
    .eq("id", id)
    .eq("user_id", user.id);
}

export async function getItems() {
  const supabase = await createSupabaseServerClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  const { data } = await supabase
    .from("items")
    .select("*")
    .eq("user_id", user.id)
    .order("id");

  return data;
}
