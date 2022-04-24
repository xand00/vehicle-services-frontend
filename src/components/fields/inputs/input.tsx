import { ClassNameProp, ErrorExistsProp } from "@/types/props";
import getDefaultInputClassName from "@/utils/class-name/get-default-input-class-name";
import React, { forwardRef, LegacyRef, RefAttributes } from "react";

type InputProps = {
    className?: ClassNameProp,
    errorExists: ErrorExistsProp
}

const Input: React.ForwardRefExoticComponent<Pick<InputProps & RefAttributes<HTMLInputElement>, keyof InputProps | "key" & RefAttributes<HTMLInputElement>>> = forwardRef(({
    className = '',
    errorExists = false,
    ...props
}, ref) => {

    return <input
        {...props}
        className={getDefaultInputClassName(errorExists, className)}
        ref={ref as LegacyRef<HTMLInputElement>}
    />

})

export default Input