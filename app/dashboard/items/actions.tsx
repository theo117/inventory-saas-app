import { getProfile } from "@/app/lib/get-profile"
import { createSupabaseServerClient } from "@/app/lib/supabase-server"

export async function deleteItem(id: string) {
  const supabase = await createSupabaseServerClient()
  const me = await getProfile()

  if (!me || me.role !== "admin") {
    throw new Error("Not allowed")
  }

  const { data: item } = await supabase
    .from("items")
    .select("name")
    .eq("id", id)
    .single()

  await supabase.from("items").delete().eq("id", id)

  await supabase.from("audit_logs").insert({
    actor_id: me.id,
    action: "DELETED_ITEM",
    target: item?.name ?? `Item ${id}`,
  })
}
