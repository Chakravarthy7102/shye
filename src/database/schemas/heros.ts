import {
	toTypedRxJsonSchema,
	type ExtractDocumentTypeFromTypedRxJsonSchema,
	type RxCollection,
	type RxJsonSchema,
} from "rxdb";

const HeroSchemaLiteral = {
	title: "hero",
	description: "an individual hero",
	version: 0,
	type: "object",
	primaryKey: "name",
	properties: {
		name: {
			type: "string",
			maxLength: 100,
		},
		color: {
			type: "string",
		},
		createdAt: {
			type: "number",
		},
		updatedAt: {
			type: "number",
		},
	},
	required: ["name", "color", "createdAt", "updatedAt"],
} as const;

const SchemaTyped = toTypedRxJsonSchema(HeroSchemaLiteral);

// aggregate the document type from the schema
type HeroDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof SchemaTyped>;

// create the typed RxJsonSchema from the literal typed object.
export const HeroSchema: RxJsonSchema<HeroDocType> = SchemaTyped;

export type HeroesCollection = RxCollection<HeroDocType>;
