import { ButtonTextProp, DescriptionProp, ImgSrcProp, IsReversedProp, SubTitleProp, TitleProp, UrlProp } from "@/types/props"
import Link from "next/link"
import React from "react"

type CardReadMoreProps = {
  imgSrc: ImgSrcProp | null,
  title: TitleProp,
  subTitle: SubTitleProp,
  description: DescriptionProp,
  url: UrlProp,
  isReversed?: IsReversedProp,
  buttonText?: ButtonTextProp,
}

const CardReadMore: React.FC<CardReadMoreProps> = ({
  imgSrc,
  title,
  subTitle,
  description,
  url,
  isReversed = false,
  buttonText = "Подробнее",
}) => {
  return (
    <section className="lg:grid lg:gap-5 lg:grid-rows-none lg:grid-cols-3 m-8 lg:p-5 lg:p-8">
      <div
        className={`${
          isReversed ? "lg:order-last" : ""
        } row-span-1 col-span-2 lg:row-atuo lg:col-auto w-full`}
      >
        <img src={imgSrc ?? ''} className="w-full lg:h-full" alt="" />
      </div>
      <div className="flex flex-col lg:col-span-2">
        <h4 className="text-3xl my-1">{title}</h4>
        <h5 className="text-xl my-1">{subTitle}</h5>
        <p className="text-md my-1 lg:grow">{description}</p>
        <Link href={url}>
          <button className="btn-primary w-full mt-1 lg:w-1/2">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  )
}

export default CardReadMore
