# GQLInspector-core

Inspect graphql schema from gql endpoint. 
(Introspection should be enabled.)  
> Why you should disable graphql inspection in production  
> [General](https://lab.wallarm.com/why-and-how-to-disable-introspection-query-for-graphql-apis/)  
> [Apollo](https://www.apollographql.com/blog/graphql/security/why-you-should-disable-graphql-introspection-in-production/)

## Installation

Using npm :  
```sh
$ npm i gqlinspector-core
```

## Usage

```ts
import inspectSchema from 'gqlinspector-core'
const endpoint = 'http://localhost:4000'
inspectSchema(endpoint)
    .then(result => {
        doSomethingWithInspectionResult(result.schema)
        result.parsedTypes.forEach(parsedType => {
            doSomethingWithParsedType(parsedType)
        })
    })
```

## Dependencies  
`fetch` from `node-fetch@2.6.1`  
`getIntrospectionSchema()` from `graphql`