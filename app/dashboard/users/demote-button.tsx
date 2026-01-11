"use client"

import { demoteUser } from "./actions"
import { useTransition } from "react"

export default function DemoteButton({ userId }: { userId: string }) {
  const [isPending, startTransition] = useTransition()

  return (
    <button
      onClick={() => startTransition(() => demoteUser(userId))}
      disabled={isPending}
      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500"
    >
      {isPending ? "Demoting..." : "Demote"}
    </button>
  )
}
