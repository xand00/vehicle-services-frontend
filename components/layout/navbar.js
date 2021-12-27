import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import Logo from "../logo"

const Navbar = () => {
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
      <div className="lg:container lg:mx-auto grid grid-cols-2 grid my-2 mx-8">
        <Logo wrapperClasses="h-12 self-center" svgClasses="h-full"></Logo>
        <div className="lg:hidden place-self-end">
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
          } lg:place-self-end lg:flex col-span-2 lg:col-auto`}
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
