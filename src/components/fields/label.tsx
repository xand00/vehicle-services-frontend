import { ChildrenProp, ClassNameProp } from "@/types/props"
import createClassNameFromClassList from "@/utils/class-name/create-class-name-from-class-list"
import filterClassList from "@/utils/class-name/filter-class-list"
import React from "react"

type LabelProps = {
  children: ChildrenProp,
  className?: ClassNameProp
}

const Label: React.FC<LabelProps> = ({
  children,
  className,
  ...props
}) => {
    const classNameList = filterClassList([
        'block',
        'text-sm',
        'font-medium',
        'text-gray-700',
        className ?? ''
    ])

    return (
      <label
        className={createClassNameFromClassList(classNameList)}
        {...props}
      >
        {children}
      </label>
    )
  }
  
  export default Label