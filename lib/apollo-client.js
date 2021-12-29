import { ApolloClient, InMemoryCache } from "@apollo/client"

const apolloClient = new ApolloClient({
  uri:
    process.env.NEXT_PUBLIC_STRAPI_BACKEND + "/graphql" ||
    "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
})

export default apolloClient
