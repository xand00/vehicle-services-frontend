import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Email from "@/components/contact-info/email"
import PhoneNumber from "@/components/contact-info/phone-number"
import Logo from "@/components/logo"
import Location from "../contact-info/location"
import { useAppSelector } from "@/hooks"
import LogoWithSiteName from "../logo-with-site-name"

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
      <div className="xl:container xl:mx-auto grid grid-cols-2 gap-2 xl:grid-cols-5 xl:justify-items-none my-3 mx-3">
        <div>
          <LogoWithSiteName />
        </div>
        <div className="xl:hidden place-self-end my-auto">
          <svg onClick={toggleMobileMenuActive} xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuActive ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
          
          {/* <span
            onClick={toggleMobileMenuActive}
            className={`navbar-link ${isMobileMenuActive ? "active" : ""}`}
          >
            Меню
          </span> */}
        </div>
        <span className="my-auto xl:pl-5 col-span-3 xl:col-auto md:mx-auto">
          <PhoneNumber />
        </span>
        <span className="my-auto xl:pl-5 col-span-3 xl:col-auto md:mx-auto">
          <Location />
        </span>

        <span className={`my-auto xl:pl-5 col-span-3 xl:col-auto xl:block md:mx-auto ${isMobileMenuActive ? "" : "hidden"}`}>
          <Email />
        </span>
        
        <div
          className={`${
            isMobileMenuActive ? "" : "hidden"
          } xl:place-self-end xl:flex col-span-3 xl:col-auto`}
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
