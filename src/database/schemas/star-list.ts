import { db } from "..";

export type StarsList = {
	id?: number;
	title: string;
	description?: string;
	reposCount: number;
};

type FindByFilter = Partial<Omit<StarsList, "description">>;

export default class StarsListCollection {
	public static findAll() {
		return db.starsList.toArray();
	}

	public static findBy(filter: FindByFilter) {
		return db.starsList.where({ ...filter });
	}

	public static findOne(filter: FindByFilter) {
		return db.starsList.where({ ...filter }).first();
	}

	public static create(list: StarsList) {
		return db.starsList.add(list);
	}
}
