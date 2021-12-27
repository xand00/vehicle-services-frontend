import { Fragment } from "react"
import PageTitle from "../components/page-title"
import TestimonialList from "../components/testimonial-list"
import CardReadMore from "../components/card-read-more"
import { getServicesPromotion, getTestimonials } from "../utils/api"
import { getStrapiMedia } from "../utils/medias"
import Head from "next/head"

const HomePage = ({ testimonialList, servicesPromotion }) => {
  const servicesPromotionPreviewImage = servicesPromotion.preview_image
  return (
    <Fragment>
      <Head>
        <title>Ремшип | Главная</title>
        <meta name="keywords" content="remship" />
      </Head>
      <PageTitle>Главная</PageTitle>
      <CardReadMore
        url={"/services"}
        imgSrc={getStrapiMedia(servicesPromotionPreviewImage.url)}
        title={servicesPromotion.name}
        subTitle={servicesPromotion.sub_title}
        description={servicesPromotion.description}
      ></CardReadMore>
      <TestimonialList testimonialList={testimonialList}></TestimonialList>
    </Fragment>
  )
}

export async function getStaticProps() {
  const testimonialList = await getTestimonials()
  const servicesPromotion = await getServicesPromotion()
  return { props: { testimonialList, servicesPromotion } }
}

export default HomePage
