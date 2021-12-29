import Modal from "../layout/modal"

const ThankYouForRequest = () => {
  return (
    <Modal id="thank-you-for-request">
      <div className="grid grid-rows-2 place-items-center">
        <div className="text-xl font-bold self-end text-center">Спасибо за заявку</div>
        <div className="text-md self-start text-center">Мы скоро вам перезвоним</div>
      </div>
    </Modal>
  )
}

export default ThankYouForRequest
