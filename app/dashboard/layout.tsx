import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/app/lib/supabase-server";
import Link from "next/link";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSupabaseServerClient();
const { data: { user } } = await supabase.auth.getUser();


  if (!user) redirect("/login");

  return (
    <div className="flex min-h-screen bg-zinc-100">
      <aside className="w-64 bg-white p-6 border-r">
  <h2 className="text-xl font-semibold mb-6">Inventory</h2>

  <nav className="flex flex-col gap-3">
    <Link href="/dashboard" className="text-zinc-700 hover:text-black">
      Dashboard
    </Link>

    <Link href="/dashboard/items" className="text-zinc-700 hover:text-black">
      Inventory
    </Link>
  </nav>
  <form action={require("./logout-action").logout}>
  <button className="mt-8 w-full rounded bg-zinc-900 py-2 text-white hover:bg-zinc-700">
    Sign out
  </button>
</form>

</aside>

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
