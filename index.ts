#!/usr/bin/env node
import { IntrospectionSchema } from "graphql";
import { getSchemaFromEndpoint } from "./getSchema";
import { analyzeSchemaByType, ParsedIntrospectionType } from "./inspector";

export interface InspectSchemaResult {
    schema: IntrospectionSchema
    parsedTypes: ParsedIntrospectionType[]
}

export default function inspectSchemaFromEndpoint(endpoint: string) {
    return getSchemaFromEndpoint(endpoint)
        .then((schema: IntrospectionSchema) => {
            return {
                schema,
                parsedTypes: schema.types.map((v) => analyzeSchemaByType({ schema, type: v })),
            }
        })
}