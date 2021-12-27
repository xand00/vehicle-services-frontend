import PageTitle from "../../components/page-title"
import { Fragment } from "react"
import ServiceList from "../../components/service-list"
import { getServices } from "../../utils/api"
import Head from "next/head"

const Services = ({ services }) => {
  return (
    <Fragment>
      <Head>
        <title>Ремшип | Услуги</title>
        <meta name="keywords" content="remship услуги" />
      </Head>
      <PageTitle>Услуги</PageTitle>
      <ServiceList serviceList={services}></ServiceList>
    </Fragment>
  )
}

export async function getStaticProps() {
  const services = await getServices()
  return { props: { services } }
}

export default Services
