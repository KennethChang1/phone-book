import type { AppProps } from "next/app";
import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { ApolloProvider } from "@apollo/client/react";
import { Global, css } from "@emotion/react";

export default function App({ Component, pageProps }: AppProps) {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const link = from([
    errorLink,
    new HttpLink({ uri: "https://wpe-hiring.tokopedia.net/graphql" }),
  ]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }

          a {
            text-decoration: none;
            color: black;
          }

          button {
            border: none;
            background-color: unset;
          }

          input {
            border: unset;
          }
        `}
      />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
