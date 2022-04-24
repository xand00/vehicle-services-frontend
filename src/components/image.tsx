import NextImage, { ImageLoader, ImageProps as NextImageProps } from "next/image"
import getStrapiMedia from "@/api/vehicle-services/get-strapi-media"
import { AlternativeTextProp, ClassNameProp, HeightProp, SrcProp, UrlProp, WidthProp } from "@/types/props"
import React from "react"

type Media = {
  url: UrlProp,
  alternativeText: AlternativeTextProp,
  width: WidthProp,
  height: HeightProp
}

type ImageProps = {
  media: Media,
  className: ClassNameProp,
} & NextImageProps

type LoaderProps = {
  src: SrcProp
}

const Image: React.FC<ImageProps> = ({ media, className, ...props }) => {
  if (!media) {
    return <NextImage {...props} />
  }

  const { url, alternativeText } = media

  const loader = ({ src }: LoaderProps) => {
    return getStrapiMedia(src)
  }

  return (
    <NextImage
      loader={loader as ImageLoader}
      layout="responsive"
      objectFit="contain"
      className={className}
      width={media.width}
      height={media.height}
      src={url}
      alt={alternativeText || ""}
    />
  )
}

export default Image
