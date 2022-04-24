import { getService } from "@/api/vehicle-services"
import getStrapiMedia from "@/api/vehicle-services/get-strapi-media"
import { Service } from "@/types/vehicle-services-models/service"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import CardReadMore from "@/components/card-read-more"
import PageTitle from "@/components/page-title"

type ServicePageProps = {
  service: Service
}

const ServicePage: NextPage<ServicePageProps> = ({ service }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading product...</div>
  }
  const url = "/services-request"
  const imgSrc = getStrapiMedia(service.preview_image.url)
  const title = service.name
  const subTitle = service.sub_title
  const description = service.description
  return (
    <>
      <PageTitle>Услуга</PageTitle>
      <CardReadMore
        isReversed={true}
        url={url}
        imgSrc={imgSrc}
        title={title}
        subTitle={subTitle}
        description={description}
        buttonText={"Заказать услугу"}
      />
    </>
  )
}

export default ServicePage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const returnValue = { props: {} };

  let id;
  if(params) {
    id = params.slug as string
    const getServicePayload = { id }
    const service = await getService(getServicePayload)
    returnValue.props = { ...returnValue.props, service }
  }

  return returnValue
}
