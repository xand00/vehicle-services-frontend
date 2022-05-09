import { useAppSelector } from "@/hooks"
import Link from "next/link"
import Logo from "./logo"

const LogoWithSiteName: React.FC = () => {
    const siteInfoName = useAppSelector(state => state.siteInfo.name)
    return (
        <Link href="/">
            <a className="flex items-center max-w-max">
                <Logo wrapperClasses="h-12" svgClasses="h-12"></Logo>
                <span className="font-medium text-2xl ml-3 capitalize">{siteInfoName ?? ''}</span>
            </a>
        </Link>
    )
}

export default LogoWithSiteName