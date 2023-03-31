import { gql } from "@/src/__generated__";

export const GET_CONTACT_LIST = gql(/* GraphQL */ `
  query GetContactList($limit: Int, $offset: Int, $where: contact_bool_exp) {
    contact(limit: $limit, offset: $offset, where: $where) {
      created_at
      first_name
      id
      last_name
      phones {
        number
      }
    }
  }
`);

export const GET_CONTACT_DETAIL = gql(/* GraphQL */ `
  query GetContactDetail($id: Int!) {
    contact_by_pk(id: $id) {
      last_name
      id
      first_name
      created_at
      phones {
        number
      }
    }
  }
`);

export const EDIT_CONTACT_BY_ID = gql(
  /* GraphQL */
  `
    mutation EditContactById($id: Int!, $_set: contact_set_input) {
      update_contact_by_pk(pk_columns: { id: $id }, _set: $_set) {
        id
        first_name
        last_name
        phones {
          number
        }
      }
    }
  `
);
