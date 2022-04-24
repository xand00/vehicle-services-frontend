import Navbar from "@/components/layouts/navbar"
import Footer from "@/components/layouts/footer"
import React, { useEffect } from "react"
import fillStoreWithContact from "./fill-store-with-contact"
import { ChildrenProp } from "@/types/props"
import { useAppDispatch } from "@/hooks"

type LayoutProps = {
  children: ChildrenProp
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    fillStoreWithContact(dispatch)
  })
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
