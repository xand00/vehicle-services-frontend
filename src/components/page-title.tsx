import { ChildrenProp } from "@/types/props"
import React from "react"

type PageTitleProps = {
  children: ChildrenProp
}

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return (
    <div className="border-solid border-b border-gray-300">
      <div className="text-center lg:text-left text-3xl lg:text-4xl p-5 lg:ml-24 font-bold">
        {children}
      </div>
    </div>
  )
}

export default PageTitle
