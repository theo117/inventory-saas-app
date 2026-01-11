import { createSupabaseServerClient } from "@/app/lib/supabase-server"
import { getProfile } from "@/app/lib/get-profile"
import { redirect } from "next/navigation"
import PromoteButton from "./promote-button"
import DemoteButton from "./demote-button"

type User = {
  id: string
  email: string
  role: string
}

export default async function UsersPage() {
  const supabase = await createSupabaseServerClient()
  const me = await getProfile()

  if (!me || me.role !== "admin") redirect("/dashboard")

  const { data } = await supabase
    .from("profiles")
    .select("id, email, role")
    .order("email")

  const users = data as User[] | null

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">User Management</h1>

      <div className="space-y-2">
        {users?.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <div>
              <div className="font-medium">{user.email}</div>
              <div className="text-sm text-zinc-500">{user.role}</div>
            </div>

            <div className="flex gap-2">
              {user.role === "staff" && (
                <PromoteButton userId={user.id} />
              )}

              {user.role === "admin" && user.id !== me.id && (
                <DemoteButton userId={user.id} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
