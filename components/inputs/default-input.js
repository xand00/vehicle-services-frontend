import InputMask from "react-input-mask"

const DefaultInput = ({
  name,
  className = null,
  value = null,
  placeholder = null,
  type = "text",

  onChange = null,
  onInput = null,
  onPaste = null,
  mask = null,
}) => {
  return (
    <InputMask
      name={name}
      className={`default-input ${className ?? ""}`}
      placeholder={placeholder}
      type={type}
      mask={mask}
      value={value ?? ""}
      onInput={onInput}
    />
  )
}

export default DefaultInput
