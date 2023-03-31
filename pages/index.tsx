/** @jsxImportSource @emotion/react */

import useGetContactList from "@/graphql/useGetContactList";
import FavoriteContact from "@/components/FavoriteContact";
import AllContact from "@/components/AllContact";
import Header from "@/components/Header";
import Section from "@/containers/Section";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { contact } from "@/types/types";

type ContextType = {
  favorite: contact[];
  setFavorite: Dispatch<SetStateAction<contact[] | undefined>>;
  allContact: contact[] | undefined;
  setAllContact: Dispatch<SetStateAction<contact[] | undefined>>;
};
export const UserContext = createContext<ContextType>({
  favorite: [],
  setFavorite: () => {},
  allContact: [],
  setAllContact: () => {},
});

export default function Home() {
  const [searchState, setSearchState] = useState();
  const [page, setPage] = useState(0);
  const [favorite, setFavorite] = useState<contact[]>([]);
  const { data, loading } = useGetContactList(searchState, page);
  const [allContact, setAllContact] = useState<contact[] | undefined>([]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(data?.contact));
    if (localStorage.getItem("items") !== "undefined") {
      setAllContact(JSON.parse(localStorage.getItem("items") ?? ""));
    }
  }, [data?.contact]);

  // useEffect(() => {
  //   if (!localStorage.getItem("favorite")) {
  //     localStorage.setItem("favorite", JSON.stringify([]));
  //   }
  //   setFavorite(JSON.parse(localStorage.getItem("favorite") ?? ""));
  // }, []);

  // useEffect(() => {
  //   const savedItems = localStorage.getItem("items");
  //   if (savedItems !== "undefined") {
  //     setAllContact(JSON.parse(savedItems ?? ""));
  //   }
  // }, [data?.contact]);

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      setSearchState(e.target.value === "" ? undefined : e.target.value);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(data);

  return (
    <>
      <Header></Header>
      <Section>
        <input
          css={{
            width: "100%",
            height: "35px",
            borderRadius: "20px",
            border: "1px solid #808080",
            paddingLeft: "10px",
          }}
          type="text"
          placeholder="Search Contacts"
          onKeyDown={handleKeyDown}
        />
      </Section>

      <UserContext.Provider
        value={{ favorite, setFavorite, allContact, setAllContact }}
      >
        <Section>
          <FavoriteContact data={favorite}></FavoriteContact>
        </Section>

        <Section>
          <AllContact
            data={allContact}
            loading={loading}
            page={page}
            setPage={setPage}
          ></AllContact>
        </Section>
      </UserContext.Provider>
    </>
  );
}
