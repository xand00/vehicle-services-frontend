import App from "next/app"
import Head from "next/head"
// import "../styles/index.css"
import "../styles/globals.scss"
import Layout from "../components/layout/layout"
import { store } from '../app/store'
import { Provider } from 'react-redux'
import { ApolloProvider } from "@apollo/client"
import apolloClient from "../lib/apollo-client"


const MyApp = ({ Component, pageProps }) => {
  
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Head>
            <meta
              name="description"
              content="Техническое обслуживание шин и колес, ошиповка колес, ремонт колес"
            />
            <title>Ремшип</title>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </Provider>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const categories = []
  // Pass the data to our page via props
  return { ...appProps, pageProps: { categories, path: ctx.pathname } }
}

export default MyApp
