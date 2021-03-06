import React from "react"

const Cross: React.FC = () => {
  return (
    <div className="relative cursor-pointer">
      <div className="h-0.5 w-4 bg-gray-500 rotate-45 absolute top-0 left-0"></div>
      <div className="h-0.5 w-4 bg-gray-500 -rotate-45 absolute top-0 left-0"></div>
    </div>
  )
}


export default Cross
