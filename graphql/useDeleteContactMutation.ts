import { gql, useMutation } from "@apollo/client";
import { GET_CONTACT_LIST } from "./queries.graphql";

const useDeleteContactMutation = () => {
  const DELETE_CONTACT = gql(`
    mutation DeleteContact($id: Int!) {
        delete_contact_by_pk(id: $id) {
        first_name
        last_name
        id
        }
    }
  `);
  return useMutation(DELETE_CONTACT, {
    refetchQueries: [{ query: GET_CONTACT_LIST }, "GetContactList"],
  });
};

export default useDeleteContactMutation;
