import { useQuery } from "@apollo/client";
import { GET_CONTACT_DETAIL } from "./queries.graphql";

const useGetContactDetails = (id: any) => {
  return useQuery(GET_CONTACT_DETAIL, { variables: { id } });
};

export default useGetContactDetails;
