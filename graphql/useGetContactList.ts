import { useQuery } from "@apollo/client";
import { GET_CONTACT_LIST } from "./queries.graphql";

const useGetContactList = (search?: string, page?: number) => {
  return useQuery(GET_CONTACT_LIST, {
    variables: {
      where: { first_name: { _like: search } },
      offset: page! * 10,
      limit: 10,
    },
    notifyOnNetworkStatusChange: true,
  });
};

export default useGetContactList;
