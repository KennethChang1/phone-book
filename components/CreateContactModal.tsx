/** @jsxImportSource @emotion/react */

import { css } from "@emotion/css";
import { Dispatch, SetStateAction, useState } from "react";
import Modal from "react-modal";
import { Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import useCreateContactMutation from "@/graphql/useCreateContactMutation";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ValidationSchema = Yup.object().shape({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  phones: Yup.array().of(
    Yup.object().shape({
      number: Yup.string().matches(phoneRegExp, "error").required(),
    })
  ),
});

type formValuesType = Yup.InferType<typeof ValidationSchema>;

const initialValues: formValuesType = {
  first_name: "",
  last_name: "",
  phones: [{ number: "" }],
};

const CreateContactModal = ({
  modalIsOpen,
  setIsOpen,
}: {
  modalIsOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [addContact, { data, loading }] = useCreateContactMutation();
  const [error, setError] = useState("");

  const onSubmit = (
    resetForm: any,
    { first_name, last_name, phones }: formValuesType
  ) => {
    addContact({
      variables: {
        first_name,
        last_name,
        phones,
      },
    })
      .then((res) => {
        resetForm();
        setIsOpen(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError("Phone number have to be unique");
      });
  };

  Modal.setAppElement("#__next");

  return (
    <Modal isOpen={modalIsOpen}>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <p>Create New Contact</p>
        <img
          onClick={() => setIsOpen(false)}
          css={{ width: "16px" }}
          src="/icons8-multiply-24.png"
          alt="close"
        />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(resetForm, values);
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            <label htmlFor="first_name">First Name</label>
            <Field
              css={{
                width: "100%",
                borderBottom: "1px solid black",
                marginBottom: "10px",
              }}
              name="first_name"
            ></Field>
            {errors.first_name && touched.first_name ? (
              <p css={{ color: "red", fontSize: "12px" }}>
                {errors.first_name}
              </p>
            ) : null}

            <div>
              <label htmlFor="last_name">Last Name</label>
              <Field
                name="last_name"
                css={{
                  width: "100%",
                  borderBottom: "1px solid black",
                  marginBottom: "10px",
                }}
              ></Field>
              {errors.last_name && touched.last_name ? (
                <p css={{ color: "red", fontSize: "12px" }}>
                  {errors.last_name}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="phones">Phone Number</label>
              <FieldArray name="phones">
                {({ push, remove }) => (
                  <>
                    {values.phones?.map((data, index) => (
                      <div
                        key={index}
                        css={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <Field
                          key={index}
                          name={`phones[${index}].number`}
                          css={{
                            width: "100%",
                            borderBottom: "1px solid black",
                            marginBottom: "10px",
                          }}
                        ></Field>
                        {values?.["phones"]?.length === 1 && index === 0 ? (
                          ""
                        ) : (
                          <img
                            onClick={() => remove(index)}
                            css={{ width: "16px" }}
                            src="/icons8-multiply-24.png"
                            alt="close"
                          />
                        )}
                      </div>
                    ))}
                    <button
                      css={{ marginBottom: "10px" }}
                      onClick={() => push({ number: "" })}
                      type="button"
                    >
                      Add more number
                    </button>
                  </>
                )}
              </FieldArray>
              {/* {errors.phones && touched.phones ? (
                <p css={{ color: "red", fontSize: "12px" }}>{errors.phones}</p>
              ) : null} */}
            </div>

            {loading ? (
              <p>Submitting...</p>
            ) : (
              <button
                css={{
                  backgroundColor: "rgb(131, 58, 180);",
                  color: "white",
                  padding: "5px",
                  borderRadius: "5px",
                }}
                type="submit"
              >
                Submit
              </button>
            )}
            <p css={{ color: "red", fontSize: "13px" }}>{error}</p>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateContactModal;
