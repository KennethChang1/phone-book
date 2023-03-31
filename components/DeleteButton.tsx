/** @jsxImportSource @emotion/react */
import useDeleteContactMutation from "@/graphql/useDeleteContactMutation";

const DeleteButton = ({ id }: { id: number }) => {
  const [deleteContact, { loading }] = useDeleteContactMutation();

  const onDelete = () => {
    deleteContact({ variables: { id } });
  };

  return (
    <>
      {loading ? (
        <img src="/icons8-loading-circle.gif" alt="spinner" />
      ) : (
        <button
          css={{ backgroundColor: "unset", border: "none", color: "red" }}
          onClick={onDelete}
        >
          Delete
        </button>
      )}
    </>
  );
};

export default DeleteButton;
