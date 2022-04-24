import React, { ChangeEvent, ForwardedRef, forwardRef, LegacyRef, MouseEvent, MouseEventHandler, RefAttributes, useRef } from 'react'
import { Combobox } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/solid'
import { ValueProp } from '@/types/props';
import { ControllerRenderProps } from 'react-hook-form';

type ListItem = {
  text: string,
  data: any,
  query?: string | null | undefined
}

type List = ListItem[]

type InputWithSearchProps = ControllerRenderProps & {
  list: List,
  value: ValueProp,
  disabled?: boolean,
  onClick: MouseEventHandler<HTMLInputElement>
}

const InputWithSearch: React.FC<InputWithSearchProps> = ({
  list,
  value,
  onChange,
  onClick,
  disabled = false,
  ...props
}) => {

  const filteredList =
    !value?.query || value?.query === ''
      ? list
      : list.filter(item => {
          return item.text.toLowerCase().includes(value.query.toLowerCase())
        })

  const onInput = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value
    onChange({ ...(newQuery === value?.text ? value : {}), query: newQuery })
  }

  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const onClickInput = (event: React.MouseEvent<HTMLInputElement>) => {
    if(buttonRef.current) {
      buttonRef.current.click()
    }
    if(onClick) onClick(event)
  }

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if(event.target.value !== value?.text) {
      onChange({ ...value, query: '' })
    }
  }

  return (
    <Combobox value={value} disabled={disabled} onChange={onChange}>
      <div className="relative">
        <div className="relative w-full xl:w-1/2">
          <Combobox.Input onBlur={onBlur} onClick={onClickInput} onChange={onInput} displayValue={() => value?.query ?? value?.text} className="w-full default-input" />
          <Combobox.Button ref={buttonRef as LegacyRef<HTMLButtonElement>} className="absolute inset-y-0 right-0 flex items-center pr-2">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Combobox.Options className="absolute overflow-auto bg-white w-full xl:w-1/2 z-10">
          {filteredList.map((item, index) => (
            <Combobox.Option key={index} value={item} className="p-2 hover:bg-gray-200">
              {item.text}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  )
}

export default InputWithSearch