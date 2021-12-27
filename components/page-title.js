const PageTitle = ({ children }) => {
  return (
    <div className="border-solid border-b border-gray-300">
      <div className="text-center lg:text-left text-3xl lg:text-4xl p-5 lg:ml-24 font-bold">
        {children}
      </div>
    </div>
  )
}

export default PageTitle
