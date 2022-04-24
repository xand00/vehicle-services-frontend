import NumberFormat, { NumberFormatProps } from 'react-number-format'
import { Control, useController } from 'react-hook-form'
import getDefaultInputClassName from '@/utils/class-name/get-default-input-class-name'
import { ClassNameProp, ErrorExistsProp, NameProp, ValueProp } from '@/types/props'
import React from 'react'

type NumberFormatWrapperProps = {
    control: Control,
    name: NameProp,
    className?: ClassNameProp,
    errorExists: ErrorExistsProp,
    defaultValue?: ValueProp | null
} & NumberFormatProps

const NumberFormatWrapper: React.FC<NumberFormatWrapperProps> = (
    {
        control,
        name,
        className = '',
        errorExists = false,
        defaultValue,
        ...props
    }) => {
    const { field } = useController({
        control,
        name,
        defaultValue: defaultValue ?? ''
    })
    return (
        <NumberFormat
            className={getDefaultInputClassName(errorExists, className)}
            {...props}
            {...field}
        />
    )
}

export default NumberFormatWrapper