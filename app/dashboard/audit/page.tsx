import { createSupabaseServerClient } from "@/app/lib/supabase-server"
import { getProfile } from "@/app/lib/get-profile"
import { redirect } from "next/navigation"

type AuditLog = {
  id: string
  action: string
  target: string | null
  created_at: string | null
}

export default async function AuditPage() {
  const supabase = await createSupabaseServerClient()
  const me = await getProfile()

  if (!me) redirect("/sign-in")

  const { data, error } = await supabase
    .from("audit_logs")
    .select("id, action, target, created_at")
    .eq("actor_id", me.id)
    .order("created_at", { ascending: false })

  const logs = data as AuditLog[] | null

  if (error) {
    console.error(error)
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Audit Log</h1>

      {logs?.map((log) => (
        <div key={log.id} className="border p-2 mb-2">
          <strong>{log.action}</strong> — {log.target ?? "—"} —{" "}
          {log.created_at
            ? new Date(log.created_at).toLocaleString()
            : "Unknown time"}
        </div>
      ))}
    </div>
  )
}
