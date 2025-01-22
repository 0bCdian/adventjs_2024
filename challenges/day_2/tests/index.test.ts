import { describe, it, expect } from "vitest";
import { organizeInventory, Inventory } from "../index.ts";

describe("organizeInventory", () => {
	it("should correctly organize items by category and sum quantities", () => {
		const inventory = [
			{ name: "doll", quantity: 5, category: "toys" },
			{ name: "car", quantity: 3, category: "toys" },
			{ name: "ball", quantity: 2, category: "sports" },
			{ name: "car", quantity: 2, category: "toys" },
			{ name: "racket", quantity: 4, category: "sports" },
		];

		const result = organizeInventory(inventory);

		expect(result).toEqual({
			toys: {
				doll: 5,
				car: 5,
			},
			sports: {
				ball: 2,
				racket: 4,
			},
		});
	});

	it("should sum quantities for identical items in the same category", () => {
		const inventory = [
			{ name: "book", quantity: 10, category: "education" },
			{ name: "book", quantity: 5, category: "education" },
			{ name: "paint", quantity: 3, category: "art" },
		];

		const result = organizeInventory(inventory);

		expect(result).toEqual({
			education: {
				book: 15,
			},
			art: {
				paint: 3,
			},
		});
	});

	it("should handle empty inventory", () => {
		const inventory: Inventory = [];
		const result = organizeInventory(inventory);
		expect(result).toEqual({});
	});

	it("should handle negative quantities", () => {
		const inventory = [
			{ name: "pen", quantity: -2, category: "office" },
			{ name: "pen", quantity: 5, category: "office" },
		];

		const result = organizeInventory(inventory);

		expect(result).toEqual({
			office: {
				pen: 3,
			},
		});
	});

	it("should handle decimal quantities", () => {
		const inventory = [
			{ name: "fabric", quantity: 1.5, category: "craft" },
			{ name: "fabric", quantity: 2.5, category: "craft" },
		];

		const result = organizeInventory(inventory);

		expect(result).toEqual({
			craft: {
				fabric: 4,
			},
		});
	});
});
