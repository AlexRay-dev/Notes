import {MODAL_TITLE, MODAL_TYPE} from "../../../shared/consts";

export const getModalTitle = (modalType: string) => {
  switch (modalType) {
    case MODAL_TYPE.EDIT:
      return MODAL_TITLE.EDIT
    case MODAL_TYPE.SAVE:
      return MODAL_TITLE.SAVE
    default: return
  }
}
