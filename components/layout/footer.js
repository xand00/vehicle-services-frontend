import FeedbackForm from "../feedback-form"
import Logo from "../logo"
import Sitemap from "../sitemap"

const Footer = () => {
  return (
    <div className="p-10 text-white bg-gray-900">
      <div className="container grid grid-rows-auto lg:grid-cols-3 lg:grid-rows-auto gap-10">
        <div>
          
        </div>
        {/* <div className="grid justify-items-center w-full justify-self-center">
          <FeedbackForm></FeedbackForm>
        </div> */}
        <div className="grid w-full justify-self-center">
          <Sitemap></Sitemap>
        </div>
        <div>
          <Logo svgClasses="h-24 fill-current text-white"></Logo>
          <div className="my-5">
            <div>
              <a href="tel:+79999999999" className="block link">
                <svg
                  className="fill-current text-white h-10 w-10 inline-block"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m7.92 2.645 1.66-.5a3.25 3.25 0 0 1 3.903 1.779l1.033 2.298a3.25 3.25 0 0 1-.748 3.71l-1.805 1.683a.25.25 0 0 0-.054.073c-.188.385.098 1.416.997 2.974 1.014 1.756 1.798 2.451 2.16 2.343l2.369-.724a3.25 3.25 0 0 1 3.586 1.206l1.467 2.034a3.25 3.25 0 0 1-.4 4.261l-1.263 1.196a3.75 3.75 0 0 1-3.342.948c-3.517-.73-6.668-3.563-9.48-8.433-2.814-4.875-3.69-9.023-2.56-12.437a3.75 3.75 0 0 1 2.478-2.411Zm.434 1.436a2.25 2.25 0 0 0-1.487 1.447c-.974 2.941-.185 6.676 2.435 11.215 2.618 4.534 5.456 7.085 8.487 7.715a2.25 2.25 0 0 0 2.005-.57l1.262-1.195a1.75 1.75 0 0 0 .216-2.294l-1.468-2.034a1.75 1.75 0 0 0-1.93-.65l-2.375.726c-1.314.392-2.55-.703-3.892-3.029-1.136-1.968-1.531-3.39-1.045-4.384a1.75 1.75 0 0 1 .378-.51l1.805-1.684a1.75 1.75 0 0 0 .403-1.997l-1.033-2.298a1.75 1.75 0 0 0-2.101-.958l-1.66.5Z" />
                </svg>
                <span>+7 (999) 999 99 99</span>
              </a>
              <a href="mailto:example@example.com" className="block link">
                <svg
                  className="fill-current text-white h-10 w-10 inline-block p-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 204.839 204.839"
                >
                  <path d="M0 37.748v129.343h204.839V37.748H0zm196.182 8.657v6.403L102.42 118.77 8.654 52.815v-6.41h187.528zM8.654 158.438v-95.04l91.271 64.201c.744.53 1.618.791 2.491.791s1.736-.258 2.48-.791l91.282-64.205v95.044H8.654z" />
                </svg>
                <span> example@example.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
