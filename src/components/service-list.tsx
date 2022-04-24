import CardReadMore from "./card-read-more"
import getStrapiMedia from "@/api/vehicle-services/get-strapi-media"
import { Service } from "@/types/vehicle-services-models/service"

type ServiceListProps = {
  serviceList: Service[]
}

const ServiceList = ({ serviceList = [] }: ServiceListProps) => {
  return (
    <div>
      {serviceList.map((service, index) => {
        const imgSrc = getStrapiMedia(service.preview_image.url)
        const title = service.name
        const subTitle = service.sub_title
        const description = service.description
        const url = "/services/" + service.id
        return (
          <CardReadMore
            isReversed={(index + 1) % 2 === 0}
            key={url}
            url={url}
            imgSrc={imgSrc}
            title={title}
            subTitle={subTitle}
            description={description}
          ></CardReadMore>
        )
      })}
    </div>
  )
}

export default ServiceList
