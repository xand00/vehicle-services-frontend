import PageTitle from "../components/page-title"
import TestimonialList from "../components/testimonial-list"
import CardReadMore from "../components/card-read-more"
import { getServicesPromotion, getTestimonials } from "@/api/vehicle-services"
import Head from "next/head"
import { ServicesPromotion } from "@/types/vehicle-services-models/services-promotion"
import { Testimonial } from "@/types/vehicle-services-models/testimonial"
import getStrapiMedia from "@/api/vehicle-services/get-strapi-media"

type HomePageTypes = {
  servicesPromotion: ServicesPromotion
  testimonialList: Testimonial[]
}

const HomePage = ({ testimonialList, servicesPromotion }: HomePageTypes) => {
  if(!servicesPromotion || !testimonialList) return;
  return (
    <>
      <Head>
        <title>Ремшип | Главная</title>
        <meta name="keywords" content="remship" />
      </Head>
      <PageTitle>Главная</PageTitle>
      <CardReadMore
        url={"/services"}
        imgSrc={getStrapiMedia(servicesPromotion.preview_image.url)}
        title={servicesPromotion.name}
        subTitle={servicesPromotion.sub_title}
        description={servicesPromotion.description}
      ></CardReadMore>
      <TestimonialList testimonialList={testimonialList}></TestimonialList>
    </>
  )
}

export async function getServerSideProps() {
  const testimonialList = await getTestimonials()
  const servicesPromotion = await getServicesPromotion()
  return { props: { testimonialList, servicesPromotion } }
}

export default HomePage
