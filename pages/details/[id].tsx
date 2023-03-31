/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from "@emotion/react";
import Header from "@/components/Header";
import useGetContactDetails from "@/graphql/useGetContactDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import Section from "@/containers/Section";

const ContactDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading } = useGetContactDetails(id);
  if (loading) {
    return <p>Loading...</p>;
  }
  console.log(data);
  return (
    <div
      css={{ background: "linear-gradient(to top, #5f72bd 0%, #9b23ea 100%)" }}
    >
      {/* <Header></Header> */}

      <Section
        css={{
          color: "white",
          padding: "30px 20px",
        }}
      >
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Link href="/" css={{ color: "white" }}>
            Contact
          </Link>
          <button css={{ color: "white" }}>Edit</button>
        </div>

        <div css={{ textAlign: "center" }}>
          <img
            css={{ width: "100px", borderRadius: "100%", marginBottom: "10px" }}
            src="/blank-profile-picture-973460.svg"
            alt="profile-picture"
          />
          <p css={{ marginBottom: "5px" }}>
            {data?.contact_by_pk?.first_name} {data?.contact_by_pk?.last_name}
          </p>
          <p>{data?.contact_by_pk?.phones[0].number}</p>
        </div>
      </Section>

      <Section
        css={{
          backgroundColor: "white",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          paddingTop: "20px",
        }}
      >
        <div css={{ borderBottom: "1px solid #808080", paddingBottom: "10px" }}>
          <p css={{ fontWeight: "600", marginBottom: "10px" }}>Mobile</p>
          {data?.contact_by_pk?.phones.map((item, index) => (
            <p css={{ color: "#808080", marginBottom: "5px" }} key={index}>
              {item.number}
            </p>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ContactDetail;
