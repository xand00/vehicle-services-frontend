import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../../features/modal/modalSlice"
import Cross from "../cross"

const Modal = ({ id, children }) => {
  const openedModalId = useSelector((state) => state.modal.value)
  const dispatch = useDispatch()
  const closeThisModal = (e) => dispatch(closeModal())
  const stopPropagation = (e) => e.stopPropagation()
  return (
    <div
      id={id}
      className={`${
        openedModalId === id ? "block" : "hidden"
      } fixed z-20 pt-16 top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-75 grid place-items-center`}
      onClick={closeThisModal}
    >
      <div className="relative bg-opacity-100">
        <div className="absolute right-7 top-5 z-30" onClick={closeThisModal}>
          <Cross></Cross>
        </div>
        <div className="py-12 px-24 bg-white" onClick={stopPropagation}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
