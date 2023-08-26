import { ErrorCodes } from "@/types";
import { db } from "../index";

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

	public static async create(list: StarsList) {
		const exists = await db.starsList.where("title").equals(list.title).count();

		if (exists !== 0) {
			throw {
				message: `Duplicate title, Please use a diffrent one.`,
				code: ErrorCodes.ALREADY_EXITS,
			};
		}

		return db.starsList.add(list);
	}
}
