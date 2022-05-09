import PageTitle from "@/components/page-title"
import ServiceList from "@/components/service-list"
import Head from "next/head"
import { getServices, getSiteInfo } from "@/api/vehicle-services"
import { Service } from "@/types/vehicle-services-models/service"
import { NextPage } from "next"
import capitalize from "@/utils/string/capitalize"
import { SiteInfo } from "@/types/vehicle-services-models/site-info"

type ServicesProps = {
  services: Service[],
  siteInfo: SiteInfo
}

const Services: NextPage<ServicesProps> = ({ services, siteInfo }) => {
  const siteInfoName = siteInfo.name && siteInfo.name.length ? capitalize(siteInfo.name) : 'Автосервис'
  const title = `${siteInfoName} | Услуги`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={`${siteInfoName} услуги`} />
      </Head>
      <PageTitle>Услуги</PageTitle>
      <ServiceList serviceList={services}></ServiceList>
    </>
  )
}

export default Services

export async function getServerSideProps() {
  const services = await getServices()
  const siteInfo = await getSiteInfo()
  return { props: { services, siteInfo } }
}
