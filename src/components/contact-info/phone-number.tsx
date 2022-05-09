import { useAppSelector } from "@/hooks"
import { ColorProp } from "@/types/props"
import React from "react"

type PhoneNumberProps = {
	color?: ColorProp
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({ color = 'black' }) => {
	const contactInfo = useAppSelector(state => state.contactInfo.contactInfo)
	const fullPhoneNumberForLink = useAppSelector(state => state.contactInfo.fullPhoneNumberForLink)

	return (
		<a href={"tel:" + fullPhoneNumberForLink} className="block link">
			<svg
				className={"fill-current text-" + color + " h-6 w-6 inline-block"}
				viewBox="0 0 30 30"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="m7.92 2.645 1.66-.5a3.25 3.25 0 0 1 3.903 1.779l1.033 2.298a3.25 3.25 0 0 1-.748 3.71l-1.805 1.683a.25.25 0 0 0-.054.073c-.188.385.098 1.416.997 2.974 1.014 1.756 1.798 2.451 2.16 2.343l2.369-.724a3.25 3.25 0 0 1 3.586 1.206l1.467 2.034a3.25 3.25 0 0 1-.4 4.261l-1.263 1.196a3.75 3.75 0 0 1-3.342.948c-3.517-.73-6.668-3.563-9.48-8.433-2.814-4.875-3.69-9.023-2.56-12.437a3.75 3.75 0 0 1 2.478-2.411Zm.434 1.436a2.25 2.25 0 0 0-1.487 1.447c-.974 2.941-.185 6.676 2.435 11.215 2.618 4.534 5.456 7.085 8.487 7.715a2.25 2.25 0 0 0 2.005-.57l1.262-1.195a1.75 1.75 0 0 0 .216-2.294l-1.468-2.034a1.75 1.75 0 0 0-1.93-.65l-2.375.726c-1.314.392-2.55-.703-3.892-3.029-1.136-1.968-1.531-3.39-1.045-4.384a1.75 1.75 0 0 1 .378-.51l1.805-1.684a1.75 1.75 0 0 0 .403-1.997l-1.033-2.298a1.75 1.75 0 0 0-2.101-.958l-1.66.5Z" />
			</svg>
			<span>{contactInfo.fullPhoneNumber ?? "-"}</span>
		</a>
	)
}

export default PhoneNumber
