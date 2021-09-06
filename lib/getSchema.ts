import { getIntrospectionQuery, IntrospectionQuery } from "graphql"
import fetch, { RequestInit } from 'node-fetch'

export function getSchemaFromEndpoint(endpoint: string){
    return request<IntrospectionQuery>(endpoint, {
        method: "POST",
        body: JSON.stringify({ query: getIntrospectionQuery() }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(queryResult => queryResult.__schema)
}

function request<T>(url: string, config?: RequestInit): Promise<T> {
    return fetch(url, config)
        .then((response) => response.json())
        .then((json: RequestResult<T>) => json.data);
}

interface RequestResult<T>{
    data: T
}