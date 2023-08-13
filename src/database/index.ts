import { RxDatabase, addRxPlugin, createRxDatabase } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { HeroSchema, HeroesCollection } from "./schemas/heros";

addRxPlugin(RxDBDevModePlugin);

export type DatabaseCollections = {
	heroes: HeroesCollection;
};
export default class Database {
	private static db: RxDatabase<DatabaseCollections, any, any> | undefined;

	static async getDbInstance() {
		if (this.db === undefined) {
			this.db = await createRxDatabase<DatabaseCollections>({
				name: "shyedb",
				storage: getRxStorageDexie(),
			});

			console.log("DatabaseService: created database");

			await this.db.addCollections({
				heroes: {
					schema: HeroSchema,
				},
			});

			console.log("DatabaseService: create collections");
		}

		return this.db;
	}
}
