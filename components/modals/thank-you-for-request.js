import Modal from "../layout/modal"

const ThankYouForRequest = () => {
  return (
    <Modal id="thank-you-for-request">
      <div className="grid grid-rows-2 place-items-center">
        <div className="text-xl font-bold self-end">Спасибо за заявку</div>
        <div className="text-md self-start">Мы скоро вам перезвоним</div>
      </div>
    </Modal>
  )
}

export default ThankYouForRequest
