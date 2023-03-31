/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetContactList($limit: Int, $offset: Int, $where: contact_bool_exp) {\n    contact(limit: $limit, offset: $offset, where: $where) {\n      created_at\n      first_name\n      id\n      last_name\n      phones {\n        number\n      }\n    }\n  }\n": types.GetContactListDocument,
    "\n  query GetContactDetail($id: Int!) {\n    contact_by_pk(id: $id) {\n      last_name\n      id\n      first_name\n      created_at\n      phones {\n        number\n      }\n    }\n  }\n": types.GetContactDetailDocument,
    "\n    mutation EditContactById($id: Int!, $_set: contact_set_input) {\n      update_contact_by_pk(pk_columns: { id: $id }, _set: $_set) {\n        id\n        first_name\n        last_name\n        phones {\n          number\n        }\n      }\n    }\n  ": types.EditContactByIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContactList($limit: Int, $offset: Int, $where: contact_bool_exp) {\n    contact(limit: $limit, offset: $offset, where: $where) {\n      created_at\n      first_name\n      id\n      last_name\n      phones {\n        number\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContactList($limit: Int, $offset: Int, $where: contact_bool_exp) {\n    contact(limit: $limit, offset: $offset, where: $where) {\n      created_at\n      first_name\n      id\n      last_name\n      phones {\n        number\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContactDetail($id: Int!) {\n    contact_by_pk(id: $id) {\n      last_name\n      id\n      first_name\n      created_at\n      phones {\n        number\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContactDetail($id: Int!) {\n    contact_by_pk(id: $id) {\n      last_name\n      id\n      first_name\n      created_at\n      phones {\n        number\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation EditContactById($id: Int!, $_set: contact_set_input) {\n      update_contact_by_pk(pk_columns: { id: $id }, _set: $_set) {\n        id\n        first_name\n        last_name\n        phones {\n          number\n        }\n      }\n    }\n  "): (typeof documents)["\n    mutation EditContactById($id: Int!, $_set: contact_set_input) {\n      update_contact_by_pk(pk_columns: { id: $id }, _set: $_set) {\n        id\n        first_name\n        last_name\n        phones {\n          number\n        }\n      }\n    }\n  "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;