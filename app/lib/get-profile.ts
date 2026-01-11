import { createSupabaseServerClient } from "@/app/lib/supabase-server"

export async function getProfile() {
  const supabase = await createSupabaseServerClient()

  const {
    data: { user }
  } = await supabase.auth.getUser()

  if (!user) return null

  const { data, error } = await supabase
    .from("profiles")
    .select("id, email, role")
    .eq("id", user.id)
    .single()

  if (error) {
    console.error("Profile error:", error)
    return null
  }

  return data
}

console.log("SUPABASE URL:", process.env.NEXT_PUBLIC_SUPABASE_URL)

