import Dexie, { Table } from "dexie";
import { StarsList } from "./schemas/star-list";
import { StarsListItem } from "./schemas/star-list-item";

export class ShyeDatabase extends Dexie {
	starsList!: Table<StarsList, number>;
	starsListItem!: Table<StarsListItem, number>;

	constructor() {
		super("ShyeDb");
		this.version(1).stores({
			starsList: "++id,title",
			starListItem: "++id,starListId,githubRepoId",
		});
	}
}

export const db = new ShyeDatabase();



