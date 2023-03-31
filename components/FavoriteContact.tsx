import { contact } from "@/types/types";
import { css } from "@emotion/css";
import Contact from "./Contact";
const FavoriteContact = ({ data }: { data: contact[] }) => {
  return (
    <div
      className={css`
        border-bottom: 1px solid #808080;
        padding-bottom: 10px;
      `}
    >
      <h2
        className={css`
          margin-bottom: 20px;
        `}
      >
        Favorites
      </h2>
      {data.length !== 0 ? (
        data?.map((data: contact) => (
          <Contact key={data.id} data={data}></Contact>
        ))
      ) : (
        <p
          className={css`
            text-align: center;
          `}
        >
          No Favorite
        </p>
      )}
    </div>
  );
};

export default FavoriteContact;
