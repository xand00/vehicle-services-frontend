const DefaultTextarea = ({
  name,
  className = null,
  value = null,
  onInput = null,
  placeholder = null,
  rows = 5,
}) => {
  return (
    <textarea
      className={`default-input ${className ?? ""}`}
      name={name}
      value={value}
      onInput={onInput ?? null}
      placeholder={placeholder}
      rows={rows}
    />
  )
}

export default DefaultTextarea
