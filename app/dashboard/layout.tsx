import { redirect } from "next/navigation"
import { getProfile } from "@/app/lib/get-profile"
import DashboardNav from "./DashboardNav"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const profile = await getProfile()

  if (!profile) redirect("/sign-in")

  return (
    <div className="flex min-h-screen bg-zinc-100">
      <DashboardNav role={profile.role} />
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
