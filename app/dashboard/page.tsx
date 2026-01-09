import { getItems } from "./items/actions";
import InventoryChart from "./InventoryChart";
import Link from "next/link";

export default async function DashboardPage() {
  const items = (await getItems()) ?? [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-zinc-600">Overview of your inventory</p>
      </div>

      <InventoryChart items={items} />

      <Link
        href="/dashboard/items"
        className="inline-block rounded bg-black px-4 py-2 text-white"
      >
        Manage Inventory
      </Link>
    </div>
  );
}
