import App from "next/app"
import Head from "next/head"
// import "../styles/index.css"
import "../styles/globals.scss"
import Layout from "../components/layout/layout"
import { store } from "../app/store"
import { Provider } from "react-redux"
import { ApolloProvider } from "@apollo/client"
import { getApolloClient } from "../lib/apollo-client"
import Logo from "../components/logo"

const MyApp = ({ Component, pageProps }) => {
  if (!pageProps) {
    return (
      <div className="flex-center h-screen">
        <Logo svgClasses="h-24" />
      </div>
    )
  }
  const apolloClient = getApolloClient()
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

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

export default MyApp
