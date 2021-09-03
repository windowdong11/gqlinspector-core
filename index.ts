#!/usr/bin/env node
import { IntrospectionSchema } from "graphql";
import { getSchemaFromEndpoint } from "./getSchema";
import { analyzeSchemaByType } from "./inspector";
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export default function inspectSchemaFromEndpoint(endpoint: string) {
    return getSchemaFromEndpoint(endpoint)
        .then((schema: IntrospectionSchema) =>
            schema.types.map((v) => analyzeSchemaByType({ schema, type: v })
            )
        )
}