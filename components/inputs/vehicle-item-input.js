import { Fragment, useRef, useState } from "react"
import DefaultInputWithLabel from "./default-input-with-label"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"
import getIsErrorListRendered from "../../utils/getIsErrorListRendered"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const VehicleItemInput = ({
  vehicleBrands,
  inputKeyToErrorList,
  touchedInputs,
}) => {
  const vehicleBrandRef = useRef()
  const vehicleModelRef = useRef()

  const unselectedOption = { id: null, name: "Выберите вариант" }

  const vehicleBrandsWithUnselectedOption = [unselectedOption, ...vehicleBrands]
  const [selectedVehicleBrand, setSelectedVehicleBrand] = useState(
    () => vehicleBrandsWithUnselectedOption[0]
  )

  const vehicleModelsWithUnselectedOption =
    selectedVehicleBrand.hasOwnProperty("vehicle_models") &&
    Array.isArray(selectedVehicleBrand.vehicle_models)
      ? [unselectedOption, ...selectedVehicleBrand.vehicle_models]
      : [unselectedOption]

  const [selectedVehicleModel, setSelectedVehicleModel] = useState(
    () => vehicleModelsWithUnselectedOption[0]
  )
  const customSetSelectedVehicleBrand = (selectedObject) => {
    setSelectedVehicleBrand((previousSelectedVehicleBrand) => {
      if (
        previousSelectedVehicleBrand &&
        previousSelectedVehicleBrand.id !== selectedObject.id
      )
        setSelectedVehicleModel(unselectedOption)
      return selectedObject
    })
  }

  const isVehicleBrandErrorListRendered = getIsErrorListRendered(
    inputKeyToErrorList,
    touchedInputs,
    "vehicle_brand"
  )
  const isVehicleModelErrorListRendered = getIsErrorListRendered(
    inputKeyToErrorList,
    touchedInputs,
    "vehicle_model"
  )

  return (
    <>
      <DefaultInputWithLabel
        label={"Бренд"}
        inputAttributeName="vehicle_brand"
        inputKeyToErrorList={inputKeyToErrorList}
        touchedInputs={touchedInputs}
      >
        <select hidden ref={vehicleBrandRef} name="vehicle_brand">
          {vehicleBrandsWithUnselectedOption.map((vehicleBrand) => (
            <option
              key={JSON.stringify(vehicleBrand)}
              value={vehicleBrand.id}
            ></option>
          ))}
        </select>
        <Listbox
          value={selectedVehicleBrand}
          name="vehicle_brand"
          onChange={(value) => {
            vehicleBrandRef.current.value = value.id
            vehicleBrandRef.current.dispatchEvent(
              new Event("change", { bubbles: true })
            )
            customSetSelectedVehicleBrand(value)
          }}
        >
          {({ open }) => (
            <>
              <div className="mt-1 relative">
                <Listbox.Button
                  className={`${
                    isVehicleBrandErrorListRendered ? "invalid-input " : ""
                  }relative w-full bg-white border border-gray-300 border-2 shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-tertiary focus:bg-tertiary sm:text-sm`}
                >
                  <span className="flex items-center">
                    {/* <img src={selectedVehicleBrand.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" /> */}
                    <span className="ml-3 block truncate">
                      {selectedVehicleBrand.name}
                    </span>
                  </span>
                  <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {vehicleBrandsWithUnselectedOption.map((vehicleBrand) => (
                      <Listbox.Option
                        key={vehicleBrand.id}
                        className={({ active }) =>
                          classNames(
                            active ? "text-white bg-tertiary" : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-3 pr-9"
                          )
                        }
                        value={vehicleBrand}
                      >
                        {({ selectedVehicleBrand, active }) => (
                          <>
                            <div className="flex items-center">
                              {/* <img src={vehicleBrand.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" /> */}
                              <span
                                className={classNames(
                                  selectedVehicleBrand
                                    ? "font-semibold"
                                    : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {vehicleBrand.name}
                              </span>
                            </div>

                            {selectedVehicleBrand ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-tertiary",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </DefaultInputWithLabel>
      <DefaultInputWithLabel
        label={"Модель"}
        inputAttributeName="vehicle_model"
        inputKeyToErrorList={inputKeyToErrorList}
        touchedInputs={touchedInputs}
      >
        <select hidden ref={vehicleModelRef} name="vehicle_model">
          {vehicleModelsWithUnselectedOption.map((vehicleModel) => (
            <option
              key={JSON.stringify(vehicleModel)}
              value={vehicleModel.id}
            ></option>
          ))}
        </select>
        <Listbox
          value={selectedVehicleModel}
          name="vehicle_model"
          onChange={(value) => {
            vehicleModelRef.current.value = value.id
            vehicleModelRef.current.dispatchEvent(
              new Event("change", { bubbles: true })
            )
            setSelectedVehicleModel(value)
          }}
        >
          {({ open }) => (
            <>
              <div className="mt-1 relative">
                <Listbox.Button
                  className={`${
                    isVehicleModelErrorListRendered ? "invalid-input " : ""
                  }relative w-full bg-white border border-gray-300 border-2 shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-tertiary focus:bg-tertiary sm:text-sm`}
                >
                  <span className="flex items-center">
                    {/* <img src={selectedVehicleModel.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" /> */}
                    <span className="ml-3 block truncate">
                      {selectedVehicleModel.name}
                    </span>
                  </span>
                  <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {vehicleModelsWithUnselectedOption.map((vehicleModel) => (
                      <Listbox.Option
                        key={vehicleModel.id}
                        className={({ active }) =>
                          classNames(
                            active ? "text-white bg-tertiary" : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-3 pr-9"
                          )
                        }
                        value={vehicleModel}
                      >
                        {({ selectedVehicleModel, active }) => (
                          <>
                            <div className="flex items-center">
                              {/* <img src={vehicleModel.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" /> */}
                              <span
                                className={classNames(
                                  selectedVehicleModel
                                    ? "font-semibold"
                                    : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {vehicleModel.name}
                              </span>
                            </div>

                            {selectedVehicleModel ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-tertiary",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </DefaultInputWithLabel>
    </>
  )
}

export default VehicleItemInput
