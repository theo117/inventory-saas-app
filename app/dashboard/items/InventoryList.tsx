"use client";

import { deleteItem, addItem } from "./actions"



type Item = {
  id: number;
  name: string;
  quantity: number;
};

export default function InventoryList({ items }: { items: Item[] }) {
  return (
    <div className="space-y-6">

      {/* Add Item */}
      <form action={require("./actions").addItem}>

        <input
          name="name"
          className="flex-1 rounded-md border px-3 py-2"
          placeholder="Item name"
          required
        />

        <input
          name="quantity"
          type="number"
          min={1}
          defaultValue={1}
          className="w-24 rounded-md border px-3 py-2"
        />

        <button className="rounded-md bg-black px-4 py-2 text-white">
          Add
        </button>
      </form>

      {/* Inventory List */}
      <ul className="divide-y">
        {items.map((item) => (
          <li key={item.id} className="py-3 flex justify-between items-center">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-zinc-500">
                Quantity: {item.quantity}
              </p>
            </div>

            <div className="flex gap-4">
              {/* Edit */}
              
                <input type="hidden" name="id" value={item.id} />

                <input
                  name="name"
                  defaultValue={item.name}
                  className="w-32 rounded border px-2 py-1"
                />

                <input
                  name="quantity"
                  type="number"
                  defaultValue={item.quantity}
                  min={1}
                  className="w-20 rounded border px-2 py-1"
                />

                <button className="text-green-600 text-sm">Save</button>
              

              {/* Delete */}
              <form action={deleteItem}>
  <input type="hidden" name="id" value={item.id} />
  <button className="text-sm text-red-600 hover:underline">
    Delete
  </button>
</form>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
