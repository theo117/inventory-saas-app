import { getProfile } from "@/app/lib/get-profile"
import { createSupabaseServerClient } from "@/app/lib/supabase-server"

export async function promoteUser(userId: string) {
  const supabase = await createSupabaseServerClient()
  const me = await getProfile()

  if (!me || me.role !== "admin") throw new Error("Not allowed")

  const { data: target } = await supabase
    .from("profiles")
    .select("email")
    .eq("id", userId)
    .single()

  await supabase.from("profiles").update({ role: "admin" }).eq("id", userId)

  await supabase.from("audit_logs").insert({
    actor_id: me.id,
    action: "PROMOTED_USER",
    target: target?.email ?? "Unknown user",
  })
}

export async function demoteUser(userId: string) {
  const supabase = await createSupabaseServerClient()
  const me = await getProfile()

  if (!me || me.role !== "admin") throw new Error("Not allowed")
  if (me.id === userId) throw new Error("You cannot demote yourself")

  const { data: target } = await supabase
    .from("profiles")
    .select("email")
    .eq("id", userId)
    .single()

  await supabase.from("profiles").update({ role: "staff" }).eq("id", userId)

  await supabase.from("audit_logs").insert({
    actor_id: me.id,
    action: "DEMOTED_USER",
    target: target?.email ?? "Unknown user",
  })
}
