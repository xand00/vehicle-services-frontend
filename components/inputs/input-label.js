const InputLabel = ({ children, labelAttributeFor = "" }) => {
  return (
    <label
      htmlFor={labelAttributeFor}
      className="block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  )
}

export default InputLabel
