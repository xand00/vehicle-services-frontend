import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import Email from "@/components/contact-info/email"
import PhoneNumber from "@/components/contact-info/phone-number"
import Logo from "@/components/logo"

const Navbar: React.FC = () => {
  const { asPath } = useRouter()
  const links = [
    {
      path: "/services",
      name: "Услуги",
    },
    // {
    //     path: '/about',
    //     name: 'О нас'
    // }
  ]
  const [isMobileMenuActive, setMobileMenuState] = useState(false)

  const toggleMobileMenuActive = () => {
    setMobileMenuState(!isMobileMenuActive)
  }
  return (
    <div className="bg-white border-b-2 border-gray-500 sticky top-0 z-10">
      <div className="lg:container lg:mx-auto grid lg:grid-cols-4 justify-items-center lg:justify-items-none my-2 mx-8">
        <Logo wrapperClasses="h-12 self-center" svgClasses="h-12"></Logo>
		<span className="lg:place-self-end self-center lg:pr-5">
			<Email color="black" />
	    </span>
		<span className="lg:place-self-start my-auto self-center lg:pl-5">
			<PhoneNumber color="black" />
		</span>
        <div className="lg:hidden lg:place-self-end">
          <span
            onClick={toggleMobileMenuActive}
            className={`navbar-link ${isMobileMenuActive ? "active" : ""}`}
          >
            Меню
          </span>
        </div>
        <div
          className={`${
            isMobileMenuActive ? "" : "hidden"
          } lg:place-self-end lg:flex col-auto`}
        >
          {links.map((link) => {
            const includes = asPath === link.path
            const className = `navbar-link ${includes ? "active" : ""}`
            return includes ? (
              <span key={link.path} className={className}>
                {link.name}
              </span>
            ) : (
              <Link key={link.path} href={link.path}>
                <a className={className}>{link.name}</a>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Navbar
