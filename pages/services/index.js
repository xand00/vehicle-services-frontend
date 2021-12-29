import PageTitle from "../../components/page-title"
import ServiceList from "../../components/service-list"
import { getServices } from "../../utils/api"
import Head from "next/head"

const Services = ({ services }) => {
  return (
    <>
      <Head>
        <title>Ремшип | Услуги</title>
        <meta name="keywords" content="remship услуги" />
      </Head>
      <PageTitle>Услуги</PageTitle>
      <ServiceList serviceList={services}></ServiceList>
    </>
  )
}

export default Services

export async function getServerSideProps() {
  const services = await getServices()
  return { props: { services } }
}
