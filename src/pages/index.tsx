import PageTitle from "../components/page-title"
import TestimonialList from "../components/testimonial-list"
import CardReadMore from "../components/card-read-more"
import { getServicesPromotion, getSiteInfo, getTestimonials } from "@/api/vehicle-services"
import Head from "next/head"
import { ServicesPromotion } from "@/types/vehicle-services-models/services-promotion"
import { Testimonial } from "@/types/vehicle-services-models/testimonial"
import getStrapiMedia from "@/api/vehicle-services/get-strapi-media"
import { SiteInfo } from "@/types/vehicle-services-models/site-info"
import capitalize from "@/utils/string/capitalize"

type HomePageTypes = {
  servicesPromotion: ServicesPromotion
  testimonialList: Testimonial[],
  siteInfo: SiteInfo
}

const HomePage = ({ testimonialList, servicesPromotion, siteInfo }: HomePageTypes) => {
  if(!servicesPromotion || !testimonialList) return;
  return (
    <>
      <Head>
        <title>{siteInfo.name && siteInfo.name.length ? capitalize(siteInfo.name) : 'Автосервис'} | Главная</title>
        <meta name="keywords" content={siteInfo.name ?? ''} />
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
  const siteInfo = await getSiteInfo()
  return { props: { testimonialList, servicesPromotion, siteInfo } }
}

export default HomePage
