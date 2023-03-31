/** @jsxImportSource @emotion/react */

import { UserContext } from "@/pages";
import { Contact, GetContactListQuery } from "@/src/__generated__/graphql";
import { contact } from "@/types/types";
import Link from "next/link";
import { Dispatch, SetStateAction, useContext } from "react";
import DeleteButton from "./DeleteButton";

const ContactItem = ({
  data,
  setPage,
}: {
  data: contact;
  setPage?: Dispatch<SetStateAction<number>>;
}) => {
  const { favorite, setFavorite, setAllContact, allContact } =
    useContext(UserContext);

  const onClick = () => {
    setFavorite([...favorite, data]);
    setAllContact(allContact?.filter((s) => s.id !== data.id));
  };
  return (
    <div
      css={{
        marginBottom: "20px",
        borderBottom: "1px solid #808080",
        fontWeight: "600",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img
        css={{ width: "20px" }}
        src="/icons8-bookmark.svg"
        alt=""
        onClick={onClick}
      />
      <Link href={`/details/${data.id}`} css={{ width: "70%" }}>
        <div>
          <p>
            {data.first_name} {data.last_name}
          </p>
          <p css={{ opacity: "30%" }}>{data.phones[0].number}</p>
        </div>
      </Link>

      <DeleteButton id={data.id}></DeleteButton>
    </div>
  );
};

export default ContactItem;
