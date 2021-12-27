import Link from "next/link"
import { useRouter } from "next/router"
import DefaultImage from "./default-image"

const CardReadMore = ({
  imgSrc,
  title,
  subTitle,
  description,
  url,
  isReversed = false,
  buttonText = "Подробнее",
}) => {
  return (
    // <section className="flex flex-col m-8 md:p-24 lg:p-5 lg:flex-row lg:p-8">
    //     <div className="lg:mr-10 flex-shrink-0">
    //         <img src="/alphonse.jpg" className="w-full lg:h-full" alt=""/>
    //     </div>
    //     <div className="flex flex-col">
    //         <h4 className="text-3xl my-1">Hero title example</h4>
    //         <h5 className="text-xl my-1">Hero sub-title description</h5>
    //         <p className="text-md my-1 flex-grow">
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //         </p>
    //         <button className="bg-gray-700 w-full text-white mt-1 py-2 text-xl lg:w-1/2">Read more</button>
    //     </div>
    // </section>

    // <section className="flex flex-col m-8 md:p-24 lg:p-5 lg:flex-row lg:p-8">
    //     <div className="lg:mr-10 flex-shrink-0">
    //         <img src={imgSrc} className="w-full lg:h-full" alt=""/>
    //     </div>
    //     <div className="flex flex-col">
    //         <h4 className="text-3xl my-1">{title}</h4>
    //         <h5 className="text-xl my-1">{subTitle}</h5>
    //         <p className="text-md my-1 flex-grow">
    //             {description}
    //         </p>
    //         <button data-url={url} className="bg-gray-700 w-full text-white mt-1 py-2 text-xl lg:w-1/2">Read more</button>
    //     </div>
    // </section>

    <section className="lg:grid lg:gap-5 lg:grid-rows-none lg:grid-cols-3 m-8 lg:p-5 lg:p-8">
      <div
        className={`${
          isReversed ? "lg:order-last" : ""
        } row-span-1 col-span-2 lg:row-atuo lg:col-auto w-full`}
      >
        <img src={imgSrc} className="w-full lg:h-full" alt="" />
      </div>
      <div className="flex flex-col lg:col-span-2">
        <h4 className="text-3xl my-1">{title}</h4>
        <h5 className="text-xl my-1">{subTitle}</h5>
        <p className="text-md my-1 lg:flex-grow">{description}</p>
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
