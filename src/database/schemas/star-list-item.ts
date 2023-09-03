import { StarredRepository } from "@/types/github";

import { db } from "../index";
import { StarsList } from "./star-list";

export type StarsListItem = Omit<StarredRepository, "id"> & {
	//this id is relevant to shye context
	id?: number;
	//id of the repository on the github database.
	githubRepoId: number;
	//id the of the list that this repo is assoicated with.
	starListId: number;
};

export type FindByFilter = Partial<StarsListItem>;

export default class StarListItemCollection {
	public static findAll() {
		return db.starListItem.toArray();
	}

	public static findBy(filter: FindByFilter) {
		return db.starListItem.where({ ...filter });
	}

	public static findOne(filter: FindByFilter) {
		return db.starListItem.where({ ...filter }).first();
	}

	public static async create(list: StarsListItem) {
		//increse the no.of items that are inside of the stars list.
		await db.starsList
			.where("id")
			.equals(list.starListId)
			.modify((list: StarsList) => {
				list = { ...list, reposCount: list.reposCount + 1 };
				return list;
			});
		return db.starListItem.add(list);
	}

	public static async delete(starListId: number) {
		//decrese the no.of items that are inside of the stars list.
		await db.starsList
			.where("id")
			.equals(starListId)
			.modify((list) => {
				list = { ...list, reposCount: list.reposCount - 1 };
			});

		return db.starListItem.where("starListId").equals(starListId).delete();
	}
}
