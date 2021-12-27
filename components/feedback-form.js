import russianPhoneNumberMask from "../utils/russianPhoneNumberMask"
import DefaultInput from "./inputs/default-input"
import DefaultTextarea from "./inputs/default-textarea"

const FeedbackForm = () => {
  return (
    <div className="grid grid-row-auto gap-5 w-full">
      <h4>Обратная связь</h4>
      <DefaultInput
        placeholder={'Имя'}
        name={'name'}
        className={'xl:w-1/2'}
        mask
      />
      <DefaultInput
        placeholder={'Номер телефона'}
        name={'fullPhoneNumber'}
        className={'xl:w-1/2'}
        mask={russianPhoneNumberMask}
      />
      <DefaultTextarea
        className="xl:w-2/3 resize-none default-input"
        placeholder="Текст"
        name="text"
        rows="5"
      />
      <button className="navbar-link text-black xl:w-1/2 mx-0" type="submit">
        Отправить
      </button>
    </div>
  )
}

export default FeedbackForm
