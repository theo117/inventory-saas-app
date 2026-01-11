"use server"

import { createSupabaseServerClient } from "@/app/lib/supabase-server"
import { getProfile } from "@/app/lib/get-profile"

export async function getItems() {
  const supabase = await createSupabaseServerClient()
  const me = await getProfile()
  if (!me) throw new Error("Not authenticated")

  


  const { data } = await supabase
    .from("items")
    .select("*")
    .eq("user_id", me.id)
    .order("created_at", { ascending: false })

  return data
}

export async function addItem(formData: FormData) {
  const supabase = await createSupabaseServerClient()
  const me = await getProfile()
  if (!me) throw new Error("Not authenticated")

  const name = formData.get("name") as string
  const quantity = Number(formData.get("quantity"))

  await supabase.from("items").insert({
    user_id: me.id,
    name,
    quantity,
  })
}

export async function deleteItem(formData: FormData) {
  const supabase = await createSupabaseServerClient()
  const me = await getProfile()

  if (!me || me.role !== "admin") {
    throw new Error("Not allowed")
  }

  const id = Number(formData.get("id"))

  const { data: item } = await supabase
    .from("items")
    .select("name")
    .eq("id", id)
    .single<{ name: string }>()

  await supabase.from("items").delete().eq("id", id)

  await supabase.from("audit_logs").insert({
    actor_id: me.id,
    action: "DELETED_ITEM",
    target: item?.name ?? `Item ${id}`,
  })
}

export async function updateItem(formData: FormData) {
  const supabase = await createSupabaseServerClient()
  const me = await getProfile()

  if (!me) throw new Error("Not authenticated")

  const id = Number(formData.get("id"))
  const name = formData.get("name") as string
  const quantity = Number(formData.get("quantity"))

  await supabase.from("items").update({ name, quantity }).eq("id", id)

  await supabase.from("audit_logs").insert({
    actor_id: me.id,
    action: "UPDATED_ITEM",
    target: `Item ${id}`,
  })
}
