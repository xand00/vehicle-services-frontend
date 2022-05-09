import { getContact } from "@/api/vehicle-services"
import { AppDispatch } from "@/store"
import { updateContactInfo, updateFullPhoneNumberForLink } from "@/store/features/contact-info/contact-info-slice"
import { parsePhoneNumber } from "libphonenumber-js"

export default async (dispatch: AppDispatch) => {
  try {
    const contact = await getContact()
    console.log(contact)
    const parsedPhoneNumber = parsePhoneNumber(
      contact.fullPhoneNumber.replace(/\D/g, ""),
      "RU"
    )
    dispatch(updateContactInfo(contact))
    if (parsedPhoneNumber) {
      dispatch(updateFullPhoneNumberForLink(parsedPhoneNumber.number))
    }
  } catch (error) {}
}
