export enum ErrorCodes {
	ALREADY_EXITS = 101,
}

export type ShyeError = {
	message: string;
	code: ErrorCodes;
};
