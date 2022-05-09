import PageTitle from "@/components/page-title"
import { EffectCallback, useEffect, useState } from "react"
import {
  getServices,
  getVehicleBrands,
  getVehicleModels
} from "@/api/vehicle-services"
import parsePhoneNumber from "libphonenumber-js"
import Input from "@/components/fields/inputs/input"
import { openModal } from "@/store/features/modal/modal-slice"
import { useDispatch } from "react-redux"
import ThankYouForRequest from "@/components/modals/thank-you-for-request"
import { useMutation } from "@apollo/client"
import { CREATE_SERVICES_REQUEST } from "@/api/vehicle-services/graphql-queries"
import * as yup from "yup"
import { useForm, Controller, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import FieldContainer from "@/components/fields/field-container"
import Label from "@/components/fields/label"
import CheckboxList from "@/components/fields/checkbox-list"
import InputWithSearch from "@/components/fields/inputs/input-with-search"
import { useDebouncedCallback } from 'use-debounce'
import "yup-phone"
import NumberFormatWrapper from "@/components/fields/inputs/number-format"
import { Service } from "@/types/vehicle-services-models/service"
import { NextPage } from "next"
import { VehicleBrand } from "@/types/vehicle-services-models/vehicle-brand"
import { VehicleModel } from "@/types/vehicle-services-models/vehicle-model"

type ServiceRequestProps = {
  services: Service[]
}

const ServicesRequest: NextPage<ServiceRequestProps> = ({ services }) => {
  const schema = yup.object({
    services: yup.array().min(1, 'Выберите хотя бы одну услугу').required('Поле услуги обязательно').nullable(),
    firstName: yup.string().required('Поле имя обязательно'),
    lastName: yup.string().required('Поле фамилия обязательно'),
    phoneNumber: yup.string().phone('RU', true, 'Можно указывать только российские номера').required('Поле номер телефона обязательно')
  })
  
  const { register, handleSubmit, control, formState: { errors }, watch, resetField, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const watchVehicleBrand = watch('vehicle_brand')
  const watchVehicleModel = watch('vehicle_model')

  const vehicleBrandToInputWithSearchMapper = (vehicleBrand: VehicleBrand) => ({ text: vehicleBrand.name, data: vehicleBrand });
  const vehicleModelToInputWithSearchMapper = (vehicleModel: VehicleModel) => ({ text: vehicleModel.name, data: vehicleModel });
  const serviceToCheckboxOptionMapper = (service: Service) => ({ text: service.name, value: service.id })

  const [vehicleBrands, setVehicleBrands] = useState(() => []);
  const vehicleBrandsEffect = () => {
    const fn = async () => {
      resetField('vehicle_model', { defaultValue: { query: '' } })
      const vehicleBrandSelectValue = watchVehicleBrand
      const getVehicleBrandsPayload = { name: vehicleBrandSelectValue?.query ?? '' };
      const vehicleBrands = await getVehicleBrands(getVehicleBrandsPayload)
      setVehicleBrands(vehicleBrands)
    }
    fn()
  }
  const debouncedVehicleBrandsEffect = useDebouncedCallback(vehicleBrandsEffect, 250)
  useEffect(debouncedVehicleBrandsEffect as EffectCallback, [watchVehicleBrand])

  
  
  const [vehicleModels, setVehicleModels] = useState(() => []);
  const vehicleModelsEffect = () => {
    const fn = async () => {
      const vehicleBrandSelectValue = watchVehicleBrand
      const vehicleModelSelectValue = watchVehicleModel
      if(!vehicleBrandSelectValue || !vehicleBrandSelectValue.data) return;
      const getVehicleModelsPayload = { name: vehicleModelSelectValue?.query ?? '', vehicle_brand_id: vehicleBrandSelectValue.data.id };
      const vehicleModels = await getVehicleModels(getVehicleModelsPayload)
      setVehicleModels(vehicleModels)
    }
    fn()
  }
  const debouncedVehicleModelsEffect = useDebouncedCallback(vehicleModelsEffect, 250)
  useEffect(debouncedVehicleModelsEffect as EffectCallback, [watchVehicleModel])

  const [addServiceRequest, { data, loading, error }] = useMutation(
    CREATE_SERVICES_REQUEST
  )
  const dispatch = useDispatch()
  const createService = async (data: FieldValues) => {
    const phoneNumber = parsePhoneNumber(data.phoneNumber);
    if(!phoneNumber) return;
    const { countryCallingCode, nationalNumber } = phoneNumber
    const payload = {
      services: data.services,
      firstName: data.firstName,
      lastName: data.lastName,
      countryCode: '+' + countryCallingCode,
      phoneNumber: nationalNumber,
      vehicle_brand: data?.vehicle_brand?.data?.id,
      vehicle_model: data?.vehicle_model?.data?.id
    }

    await addServiceRequest({ variables: payload })
    reset()
    
    dispatch(openModal('thank-you-for-request'))
  }

  

  return (
    <>
      <ThankYouForRequest></ThankYouForRequest>
      <PageTitle>Заказать услуги</PageTitle>
      <div className="grid justify-items-center py-4">
        <form noValidate onSubmit={handleSubmit(createService)} className="xl:w-1/3 grid gap-8">
          <FieldContainer error={errors?.services?.message}>
            <Label>Услуги</Label>
            <CheckboxList list={services.map(serviceToCheckboxOptionMapper)} {...register('services')} />
          </FieldContainer>

          <FieldContainer>
            <Label>Бренд</Label>
            <Controller 
              control={control}
              name={'vehicle_brand'}
              render={({ field }) => (
                <InputWithSearch
                  {...field}
                  list={vehicleBrands.map(vehicleBrandToInputWithSearchMapper)}
                  onClick={debouncedVehicleBrandsEffect}
                />
              )}
            />
          </FieldContainer>

          <FieldContainer>
            <Label>Модель</Label>
            <Controller 
              control={control}
              name={'vehicle_model'}
              render={({ field }) => (
                <InputWithSearch
                  {...field}
                  list={vehicleModels.map(vehicleModelToInputWithSearchMapper)}
                  onClick={debouncedVehicleModelsEffect}
                  disabled={!watchVehicleBrand?.data}
                />
              )}
            />
          </FieldContainer>

          <FieldContainer error={errors?.firstName?.message}>
            <Label>Имя</Label>
            <Input
              {...register('firstName')}
              errorExists={!!errors?.firstName?.message}
            />
          </FieldContainer>

          <FieldContainer error={errors?.lastName?.message}>
            <Label>Фамилия</Label>
            <Input
              {...register('lastName')}
              errorExists={!!errors?.lastName?.message}
            />
          </FieldContainer>

          <FieldContainer error={errors?.phoneNumber?.message}>
            <Label>Номер телефона</Label>
            <NumberFormatWrapper
              name={'phoneNumber'}
              control={control}
              errorExists={!!errors?.phoneNumber?.message}
              format="+7 (###) ###-##-##"
              mask="_"
              allowEmptyFormatting
            />
          </FieldContainer>

          <button
            className="btn-primary"
          >
            Заказать звонок
          </button>
        </form>
      </div>
    </>
  )
}

export default ServicesRequest

export async function getServerSideProps() {
  const services = await getServices()

  return { props: { services } }
}
