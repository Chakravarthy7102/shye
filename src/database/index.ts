import * as Schema from "@effect/schema/Schema";
import * as Evolu from "evolu";

import TodoTable from "./schemas/todo";

const SchemaList = Schema.struct({
	todo: TodoTable,
});

export const { useMutation, useQuery } = Evolu.create(SchemaList);
