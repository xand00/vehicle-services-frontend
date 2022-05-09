import { useAppSelector } from "@/hooks"
import { ColorProp } from "@/types/props" 
import React from "react"

type LocationProps = {
	color?: ColorProp
}

const Location: React.FC<LocationProps> = ({ color = 'black' }) => {
	const contactInfo = useAppSelector(state => state.contactInfo.contactInfo)
	return (
		<a href={"http://maps.google.com/?q=" + contactInfo.address} target="_blank" className="block link">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={"text-" + color + " h-6 w-6 inline-block"}
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="1">
				<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
			<span> {contactInfo.address ?? "-"}</span>
		</a>
	)
}

export default Location
