import Logo from "@/components/logo"
import Sitemap from "@/components/sitemap"
import PhoneNumber from "@/components/contact-info/phone-number"
import Email from "@/components/contact-info/email"
import React from "react"
import Location from "../contact-info/location"

const Footer: React.FC = () => {
  return (
    <div className="p-10 text-white bg-gray-900">
      <div className="container grid grid-rows-auto lg:grid-cols-3 lg:grid-rows-auto gap-10">
        <div></div>
        {/* <div className="grid justify-items-center w-full justify-self-center">
          <FeedbackForm></FeedbackForm>
        </div> */}
        <div className="grid w-full justify-self-center">
          <Sitemap></Sitemap>
        </div>
        <div>
          <Logo svgClasses="h-24 fill-current text-white"></Logo>
          <div className="my-5">
            <div>
              <PhoneNumber color="white" />
              <Location color="white" />
              <Email color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
