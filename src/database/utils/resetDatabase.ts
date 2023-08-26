import { db } from "../index";

export function resetDatabase() {
	return Promise.all(db.tables.map((table) => table.clear()));
}
