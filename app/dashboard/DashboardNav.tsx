"use client"

import Link from "next/link"

export default function DashboardNav({ role }: { role: string }) {
  return (
    <aside className="w-64 bg-white p-6 border-r">
      <h2 className="text-xl font-semibold mb-6">Inventory</h2>

      <nav className="flex flex-col gap-3">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/items">Inventory</Link>

        {role === "admin" && (
          <Link href="/dashboard/users">Manage Users</Link>
        )}
      </nav>

      <form action={require("./logout-action").logout}>
        <button className="mt-8 w-full rounded bg-zinc-900 py-2 text-white hover:bg-zinc-700">
          Sign out
        </button>
      </form>
    </aside>
  )
}
