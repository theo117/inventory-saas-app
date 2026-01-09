import { getItems } from "./actions";
import InventoryList from "./InventoryList";

export default async function DashboardItemsPage() {
  const items = (await getItems()) ?? [];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Inventory</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <InventoryList items={items} />
      </div>
    </div>
  );
}
