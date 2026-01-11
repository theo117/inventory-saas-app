"use server"

import { createSupabaseServerClient } from "@/app/lib/supabase-server"
import { getProfile } from "@/app/lib/get-profile"

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
