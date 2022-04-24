import { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

const NotFound: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 5000)
  }, [router])

  return (
    <div className="flex-center h-96">
      <h1>Страница не найдена</h1>
      <h2>
        Через несколько секунд произойдет переадресация на главную страницу
      </h2>
      <Link href="/">
        <a className="link">
          Если этого не произошло, вы можете переместиться на главную вручную
        </a>
      </Link>
    </div>
  )
}

export default NotFound
