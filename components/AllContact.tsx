/** @jsxImportSource @emotion/react */

import { contact } from "@/types/types";
import { css } from "@emotion/css";
import { Dispatch, SetStateAction } from "react";
import ContactItem from "./Contact";

const AllContact = ({
  data,
  loading,
  setPage,
  page,
}: {
  data: contact[] | undefined;
  loading: boolean;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div>
      <h2
        className={css`
          margin-bottom: 20px;
        `}
      >
        All Contacts
      </h2>
      {loading ? (
        <div css={{ textAlign: "center" }}>
          <img src="/icons8-loading-circle.gif" alt="spinner" />
        </div>
      ) : (
        data?.map((data) => (
          <ContactItem key={data.id} data={data}></ContactItem>
        ))
      )}
      <div css={{ display: "flex", justifyContent: "space-between" }}>
        <button disabled={!page} onClick={() => setPage((prev) => prev - 1)}>
          Previous
        </button>
        <button
          disabled={data?.length !== 10}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllContact;
