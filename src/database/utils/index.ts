import * as Schema from "@effect/schema/Schema";
import { formatErrors } from "@effect/schema/TreeFormatter";

export const parseToEvolueSchema = <From extends string, To>(
	schema: Schema.Schema<From, To>,
	value: string,
	onSuccess: (value: To) => void
): void => {
	if (value == null) return;
	const a = Schema.parseEither(schema)(value);
	if (a._tag === "Left") {
		alert(formatErrors(a.left.errors));
		return;
	}
	onSuccess(a.right);
};
