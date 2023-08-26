import { StarredRepository } from "@/types/github";

import { db } from "../index";

export type StarsListItem = Omit<StarredRepository, "id"> & {
	id?: number;
	starListId: number;
};

type FindByFilter = Partial<StarsListItem>;

export default class StarListItemCollection {
	public static findAll() {
		return db.starsListItem.toArray();
	}

	public static findBy(filter: FindByFilter) {
		return db.starsListItem.where({ ...filter });
	}

	public static findOne(filter: FindByFilter) {
		return db.starsListItem.where({ ...filter }).first();
	}

	public static async create(list: StarsListItem) {
		await db.starsList
			.where("id")
			.equals(list.starListId)
			.modify((list) => {
				list = { ...list, reposCount: list.reposCount + 1 };
			});
		return db.starsListItem.add(list);
	}
}
