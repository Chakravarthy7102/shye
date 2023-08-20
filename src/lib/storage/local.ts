export enum LocalStorageKeys {
	USER = "user",
	IS_NEW_USER = "is_new_user",
}

export class LocalStorage {
	static getItem(key: LocalStorageKeys) {
		const item = localStorage.getItem(key);
		if (item) {
			return JSON.parse(item);
		}
		return null;
	}

	static setItem<T>(key: LocalStorageKeys, value: NonNullable<T>) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	static removeItem(key: LocalStorageKeys) {
		localStorage.removeItem(key);
	}
}
