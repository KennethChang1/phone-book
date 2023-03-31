import { useQuery, gql, useMutation } from "@apollo/client";
import { GET_CONTACT_LIST } from "./queries.graphql";

const useCreateContactMutation = () => {
  const MUTATION = gql(`
        mutation AddContactWithPhones(
            $first_name: String!, 
            $last_name: String!, 
            $phones: [phone_insert_input!]!
            ) {
        insert_contact(
            objects: {
                first_name: $first_name, 
                last_name: 
                $last_name, phones: { 
                    data: $phones
                    }
                }
            ) {
            returning {
            first_name
            last_name
            id
            phones {
                number
            }
            }
        }
    }
  `);
  return useMutation(MUTATION, {
    refetchQueries: [{ query: GET_CONTACT_LIST }, "GetContactList"],
  });
};

export default useCreateContactMutation;
