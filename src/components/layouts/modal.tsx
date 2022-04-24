import { useAppDispatch, useAppSelector } from "@/hooks"
import { closeModal } from "@/store/features/modal/modal-slice"
import { ChildrenProp, IDProp } from "@/types/props"
import React from "react"
import Cross from "@/components/cross"

type ModalProps = {
  children: ChildrenProp,
  id: IDProp
}

const Modal: React.FC<ModalProps> = ({ id, children }) => {
  const openedModalId = useAppSelector(state => state.modal.value)
  const dispatch = useAppDispatch()
  const closeThisModal = () => dispatch(closeModal())
  const stopPropagation = (event: React.MouseEvent) => event.stopPropagation()
  return (
    <div
      id={id}
      className={`${
        openedModalId === id ? "block" : "hidden"
      } fixed z-20 pt-16 top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-75 grid place-items-center`}
      onClick={closeThisModal}
    >
      <div className="relative bg-opacity-100 md:w-max w-2/3">
        <div className="absolute right-7 top-5 z-30" onClick={closeThisModal}>
          <Cross></Cross>
        </div>
        <div className="py-12 md:px-24 px-4 bg-white" onClick={stopPropagation}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
