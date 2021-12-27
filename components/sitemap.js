import Link from "next/link"

const Sitemap = () => {
  const pages = [
    {
      url: "/",
      name: "Главная",
    },
    {
      url: "/services",
      name: "Услуги",
    },
  ]
  return (
    <div>
      <h4>Карта сайта</h4>
      <div className="flex flex-col">
        {pages.map((page) => {
          return (
            <Link key={page.url} href={page.url}>
              <a className="max-w-max link">- {page.name}</a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Sitemap
