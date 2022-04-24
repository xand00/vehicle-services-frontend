import { ClassNameProp, NameProp, OnInputTextareaProp, PlaceholderProp, RowsProp, ValueProp } from "@/types/props"
import React from "react"

type DefaultTextareaProps = {
  name: NameProp,
  className: ClassNameProp,
  value: ValueProp,
  onInput: OnInputTextareaProp,
  placeholder: PlaceholderProp,
  rows: RowsProp
}

const DefaultTextarea: React.FC<DefaultTextareaProps> = ({
  name = '',
  className = '',
  value = '',
  onInput = () => {},
  placeholder = '',
  rows = 5,
}) => {
  return (
    <textarea
      className={`default-input ${className}`}
      name={name}
      value={value}
      onInput={onInput}
      placeholder={placeholder}
      rows={rows}
    />
  )
}

export default DefaultTextarea
