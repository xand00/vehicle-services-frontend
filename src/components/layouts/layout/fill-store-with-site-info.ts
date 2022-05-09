import { getSiteInfo } from "@/api/vehicle-services"
import { AppDispatch } from "@/store"
import { updateSiteInfo } from "@/store/features/site-info/site-info-slice"

export default async (dispatch: AppDispatch) => {
  try {
    const siteInfo = await getSiteInfo()
    dispatch(updateSiteInfo(siteInfo))
  } catch (error) {
    console.log(error)
  }
}
