import Navbar from "./navbar"
import Footer from "./footer"
import fetchContactInfo from '../../utils/fetchContactInfo'

const Layout = ({ children }) => {
  fetchContactInfo()
  return (
    <div className="flex flex-col h-screen justify-between font-serif">
      <Navbar></Navbar>
      <div className="container mb-auto">
        <div>{children}</div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Layout
