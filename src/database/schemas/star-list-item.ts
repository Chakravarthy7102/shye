import { StarredRepository } from "@/types/github";

import { db } from "../index";

export type StarsListItem = Omit<StarredRepository, "id"> & {
	//this id is relevant to shye context
	id?: number;
	//id of the repository on the github database.
	githubRepoId: number;
	//id the of the list that this repo is assoicated with.
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
