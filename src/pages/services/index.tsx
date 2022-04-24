import PageTitle from "@/components/page-title"
import ServiceList from "@/components/service-list"
import Head from "next/head"
import { getServices } from "@/api/vehicle-services"
import { Service } from "@/types/vehicle-services-models/service"
import { NextPage } from "next"

type ServicesProps = {
  services: Service[]
}

const Services: NextPage<ServicesProps> = ({ services }) => {
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
