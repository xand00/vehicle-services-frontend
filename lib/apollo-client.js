import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"

const apolloClient = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri:
      process.env.NEXT_PUBLIC_STRAPI_BACKEND + "/graphql" ||
      "http://localhost:1337/graphql",
    credentials: "same-origin",
    headers: {
      cookie: req.header("Cookie"),
    },
  }),
  cache: new InMemoryCache(),
})

export default apolloClient
