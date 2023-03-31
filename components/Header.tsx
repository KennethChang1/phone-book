import { css } from "@emotion/css";
import { useState } from "react";
import CreateContactModal from "./CreateContactModal";

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div
        className={css`
          padding: 10px 20px;
          background: rgb(131, 58, 180);
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        `}
      >
        <h1
          className={css`
            margin-bottom: 10px;
            color: white;
          `}
        >
          Contacts
        </h1>
        <button
          className={css`
            background-color: unset;
            border: none;
            color: white;
          `}
          onClick={() => setIsOpen(true)}
        >
          + Add New
        </button>
        <CreateContactModal
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
        ></CreateContactModal>
      </div>
    </header>
  );
};

export default Header;
