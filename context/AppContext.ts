/* eslint-disable react/prop-types */
import { contact } from "@/types/types";
import React, {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useEffect,
  SetStateAction,
  Dispatch,
  useState,
} from "react";

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

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [favorite, setFavorite] = useState<contact[]>([]);
  const [allContact, setAllContact] = useState<contact[] | undefined>([]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(data?.contact));
    if (localStorage.getItem("items") !== "undefined") {
      setAllContact(JSON.parse(localStorage.getItem("items") ?? ""));
    }
    setFavorite(JSON.parse(localStorage.getItem("favorite") ?? ""));
    // if (localStorage.getItem("favorite")) {
    //   setFavorite(JSON.parse(localStorage.getItem("favorite") ?? ""));
    // }
  }, [data?.contact]);

  useEffect(() => {
    if (!localStorage.getItem("favorite")) {
      localStorage.setItem("favorite", JSON.stringify([]));
    }
  }, [favorite]);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
