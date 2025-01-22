export type Inventory = Array<{
	name: string;
	quantity: number;
	category: string;
}>;
export type InventoryCount = Record<string, Record<string, number>>;
export function organizeInventory(inventory: Inventory): object {
	const result: InventoryCount = {};
	for (const item of inventory) {
		const { category, quantity, name } = item;
		if (!Object.hasOwn(result, category)) {
			result[category] = {};
		}
		if (!Object.hasOwn(result[category], name)) {
			result[category][name] = 0;
		}
		result[category][name] += quantity;
	}
	return result;
}
