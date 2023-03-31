import { useMutation } from "@apollo/client";
import { GET_CONTACT_LIST, EDIT_CONTACT_BY_ID } from "./queries.graphql";

const useDeleteContactMutation = () => {
  return useMutation(EDIT_CONTACT_BY_ID, {
    refetchQueries: [{ query: GET_CONTACT_LIST }, "GetContactList"],
  });
};

export default useDeleteContactMutation;
