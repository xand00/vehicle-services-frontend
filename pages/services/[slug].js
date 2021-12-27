import { useRouter } from "next/router"
import CardReadMore from "../../components/card-read-more"
import PageTitle from "../../components/page-title"
import { getService } from "../../utils/api"
import { getStrapiMedia } from "../../utils/medias"

const ServicePage = ({ service }) => {
  const router = useRouter()
  console.log(service)
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

export async function getServerSideProps({ params }) {
  const id = params.slug
  const getServicePayload = { id }

  const service = await getService(getServicePayload)
  return { props: { service } }
}
