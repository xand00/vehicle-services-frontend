import { parsePhoneNumber } from "libphonenumber-js"
import { useEffect } from "react"
import { getContact } from "./api"
import { useDispatch } from "react-redux"
import { updateContactInfo, updateFullPhoneNumberForLink } from "../features/contactInfo/contactInfoSlice"

export default () => {
  const dispatch = useDispatch()
  useEffect(async () => {
    try {
      const contact = await getContact()
      const parsedPhoneNumber = parsePhoneNumber(
        contact.fullPhoneNumber.replace(/\D/g, ""),
        "RU"
      )
      dispatch(updateContactInfo(contact))
      if (parsedPhoneNumber) {
        dispatch(updateFullPhoneNumberForLink(parsedPhoneNumber.number))
      }
    } catch (error) {}
  }, [])
}
