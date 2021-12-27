import { getStrapiMedia } from "../utils/medias"
import NextImage from "next/image"

const DefaultImage = (props) => {
  if (!props.media) {
    return <NextImage {...props} />
  }

  const { url, alternativeText } = props.media

  const loader = ({ src }) => {
    return getStrapiMedia(src)
  }

  return (
    <NextImage
      loader={loader}
      layout="fill"
      src={url}
      alt={alternativeText || ""}
    />
  )
}

export default DefaultImage
