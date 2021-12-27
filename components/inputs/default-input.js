import InputMask from "react-input-mask";

const DefaultInput = ({
  name,
  className = null,
  value = '',
  placeholder = null,
  type = 'text',

  onChange = null,
  onInput = null,
  onPaste = null,
  mask= null
}) => {

  return (
    
    <InputMask
      name={name}
      className={`default-input ${className ?? ''}`}
      value={value}
      placeholder={placeholder}
      type={type}
      mask={mask}

      onChange={onChange}
      onInput={onInput}
      onPaste={onPaste}
    />
  )
}

export default DefaultInput
