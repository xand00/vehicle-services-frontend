
import { useAppSelector } from "@/hooks"
import { ColorProp } from "@/types/props" 
import React from "react"

type EmailProps = {
	color?: ColorProp
}

const Email: React.FC<EmailProps> = ({ color = 'black' }) => {
	const contactInfo = useAppSelector(state => state.contactInfo.contactInfo)
	return (
		<a href={"mailto:" + contactInfo.email} className="block link">
			<svg
				className={"fill-current text-" + color + " h-6 w-6 inline-block p-1"}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 204.839 204.839"
			>
				<path d="M0 37.748v129.343h204.839V37.748H0zm196.182 8.657v6.403L102.42 118.77 8.654 52.815v-6.41h187.528zM8.654 158.438v-95.04l91.271 64.201c.744.53 1.618.791 2.491.791s1.736-.258 2.48-.791l91.282-64.205v95.044H8.654z" />
			</svg>
			<span> {contactInfo.email ?? "-"}</span>
		</a>
	)
}

export default Email
