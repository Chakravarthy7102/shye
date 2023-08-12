import * as Schema from "@effect/schema/Schema";
import * as Evolu from "evolu";

const TodoId = Evolu.id("Todo");
type TodoId = Schema.To<typeof TodoId>;

const TodoTable = Schema.struct({
	id: TodoId,
	title: Evolu.NonEmptyString1000,
	isCompleted: Evolu.SqliteBoolean,
});

export default TodoTable;
