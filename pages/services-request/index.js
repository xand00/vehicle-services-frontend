import PageTitle from "../../components/page-title"
import { useRef, useState } from "react"
import { getServices, getVehicleBrands } from "../../utils/api"
import parsePhoneNumber from "libphonenumber-js"
import getInputNameToErrorList from "../../utils/getInputNameToErrorList"
import {
  fullPhoneNumberConstraint,
  nonEmptyInputConstraint,
  nonEmptyMultiInputConstraint,
  russianCountryCodeConstraint,
} from "../../utils/commonConstraints"
import DefaultInputWithLabel from "../../components/inputs/default-input-with-label"
import VehicleItemInput from "../../components/inputs/vehicle-item-input"
import formToObject from "../../utils/formToObject"
import { openModal } from "../../features/modal/modalSlice"
import { useDispatch } from "react-redux"
import ThankYouForRequest from "../../components/modals/thank-you-for-request"
import russianPhoneNumberMask from "../../utils/russianPhoneNumberMask"
import emptyFn from "../../utils/emptyFn"

export async function getStaticProps() {
  const vehicleBrands = await getVehicleBrands()
  const services = await getServices()
  return { props: { vehicleBrands, services } }
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function setHiddenPhoneInputs(parsedPhoneNumber = null, phoneNumberSetter, countryCodeSetter) {
  let nationalNumber = '';
  let countryCallingCode = '';
  if(parsedPhoneNumber && parsedPhoneNumber.isValid()) {
    nationalNumber = parsedPhoneNumber.nationalNumber;
    countryCallingCode = '+' + parsedPhoneNumber.countryCallingCode;
  }
  phoneNumberSetter(nationalNumber);
  countryCodeSetter(countryCallingCode);
}

// Add rounded-md class to Listbox.Button and Listbox.Options if you want rounded design

const ServicesRequest = ({ vehicleBrands, services }) => {
  const formRef = useRef()
  const submitFormRef = useRef()
  const dispatch = useDispatch();

  const [fullPhoneNumber, setFullPhoneNumber] = useState(() => "")
  const [phoneNumber, setPhoneNumber] = useState(() => "")
  const [countryCode, setCountryCode] = useState(() => "")

  const handleFullPhoneNumberInput = e => {
    const fullPhoneNumber = e.target.value;
    setFullPhoneNumber(fullPhoneNumber)
    setHiddenPhoneInputs(parsePhoneNumber(fullPhoneNumber), setPhoneNumber, setCountryCode)
    console.log(phoneNumber, countryCode);
  }

  const [touchedInputs, setTouchedInputs] = useState(() => [])
  const mergeWithPreviousTouchedInputs = value => setTouchedInputs(previousValue => [...previousValue, ...(Array.isArray(value) ? value : [value])].filter(onlyUnique))

  const [formValidationErrors, setFormValidationErrors] = useState(() => {})

  const validateForm = (isSubmit = false) => {
    const constraints = {
      fullPhoneNumber: fullPhoneNumberConstraint,
      firstName: nonEmptyInputConstraint,
      lastName: nonEmptyInputConstraint,
      services: nonEmptyMultiInputConstraint,
      // vehicle_brand: nonEmptyInputConstraint,
      // vehicle_model: nonEmptyInputConstraint,
      countryCode: russianCountryCodeConstraint
    }

    const formObject = formToObject(formRef.current, ['services']);
    const formValidationObject = getInputNameToErrorList(formObject, constraints) ?? {}
    const invalidInputNameList = Object.keys(formValidationObject);
    if(isSubmit) {
      mergeWithPreviousTouchedInputs(invalidInputNameList);
    }
    setFormValidationErrors(formValidationObject)
    return invalidInputNameList.length === 0 ? true : false;
  }

  const onChangeForm = e => {
    const target = e.target;
    if(target) {
      const targetName = target.getAttribute('name');
      mergeWithPreviousTouchedInputs(targetName);
    }
    validateForm();
  }

  const onHandleSubmit = e => {
    const isValid = validateForm(true);
    if(!isValid) retaurn;
    dispatch(openModal('thank-you-for-request'));
  }

  return (
    <>
      <ThankYouForRequest></ThankYouForRequest>
      <PageTitle>Заказать услуги</PageTitle>
      <div className="grid justify-items-center py-4">
        <form
          ref={formRef}
          onChange={onChangeForm}
          className="w-1/3 grid gap-5"
        >
          <DefaultInputWithLabel 
            label={"Услуги"}
            inputAttributeName={'services'}
            touchedInputs={touchedInputs}
            inputKeyToErrorList={formValidationErrors}
          >
            <div>
              {services.map((service) => {
                const inputElementId = "service-" + service.id
                return (
                  <label
                    key={service.id}
                    htmlFor={inputElementId}
                    className="block"
                  >
                    <input
                      type="checkbox"
                      name="services"
                      id={inputElementId}
                      value={service.id}
                    />
                    <span className="px-2">{service.name}</span>
                  </label>
                )
              })}
            </div>
          </DefaultInputWithLabel>
          <VehicleItemInput 
            vehicleBrands={vehicleBrands}
            inputKeyToErrorList={formValidationErrors}
            touchedInputs={touchedInputs}
          />
          <DefaultInputWithLabel
            label={"Имя"}
            inputAttributeName={"firstName"}
            inputAttributeClassName={"w-1/2"}
            inputKeyToErrorList={formValidationErrors}
            touchedInputs={touchedInputs}
          />
          <DefaultInputWithLabel
            label={"Фамилия"}
            inputAttributeName={"lastName"}
            inputAttributeClassName={"w-1/2"}
            inputKeyToErrorList={formValidationErrors}
            touchedInputs={touchedInputs}
          />
          <DefaultInputWithLabel
            label={"Номер телефона"}
            inputAttributeName={"fullPhoneNumber"}
            errorFromInputNameList={['phoneNumber', 'countryCode']}
            inputAttributeClassName={"w-1/2"}
            inputAttributeValue={fullPhoneNumber}
            inputAttributeOnInput={handleFullPhoneNumberInput}
            inputKeyToErrorList={formValidationErrors}
            touchedInputs={touchedInputs}
            mask={russianPhoneNumberMask}
            inputAttributeOnChange={emptyFn}
          />
          <DefaultInputWithLabel
            containerAttributeHidden={true}
            inputAttributeName={"phoneNumber"}
            inputAttributeValue={phoneNumber}
            inputAttributeOnChange={emptyFn}
          />
          <DefaultInputWithLabel
            containerAttributeHidden={true}
            inputAttributeName={"countryCode"}
            inputAttributeValue={countryCode}
            inputAttributeOnChange={emptyFn}
          />
          <button type="button" ref={submitFormRef} onClick={onHandleSubmit} className="btn-primary">
            Заказать звонок
          </button>
        </form>
      </div>
    </>
  )
}

export default ServicesRequest