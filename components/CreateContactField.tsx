import { Field } from "formik";

const CreateContactField = ({ name }: { name: string }) => {
  return (
    <Field
      name={name}
      css={{
        width: "100%",
        borderBottom: "1px solid black",
        marginBottom: "10px",
      }}
    ></Field>
  );
};

export default CreateContactField;
