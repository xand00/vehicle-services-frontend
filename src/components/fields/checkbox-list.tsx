import { ClassNameProp, ErrorExistsProp } from "@/types/props";
import React, { ForwardedRef, forwardRef, LegacyRef, RefAttributes } from "react"

type Option = {
    text: string,
    value: number | string
}

type CheckboxListProps = {
    className?: ClassNameProp,
    errorExists?: ErrorExistsProp,
    list: Option[]
}

const CheckboxList: React.ForwardRefExoticComponent<Pick<CheckboxListProps & RefAttributes<HTMLInputElement>, keyof CheckboxListProps | "key" & RefAttributes<HTMLInputElement>>> = forwardRef(({
    className,
    errorExists,
    list,
    ...props
}, ref) => {
    return (
        <>
            {
                list.map((option: Option, index: number) => (
                    <div key={index}>
                        <input
                            ref={ref as LegacyRef<HTMLInputElement>}
                            value={option.value}
                            type={'checkbox'}
                            className={className ?? ''}
                            {...props}
                        />
                        <span className="px-2">{option.text}</span>
                    </div>
                ))
            }
        </>
        
    );
})

export default CheckboxList