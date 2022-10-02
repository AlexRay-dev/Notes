import React, {Dispatch, FC, SetStateAction} from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SaveNoteForm from "./forms/save-note-form";
import EditNoteForm from "./forms/edit-note-form";
import {INote} from "../../core/store/reducers/notesSlice/interface";
import {ModalBackButton, ModalInner, StyledModal} from "./styled";
import {MODAL_TYPE} from "../../core/types/types";

interface INoteModalProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  modalType: MODAL_TYPE,
  note?: INote,
}

const NoteModal: FC<INoteModalProps> = ({isOpen, setIsOpen, modalType, note}) => {
  const renderForm = () => {
    switch (modalType) {
      case MODAL_TYPE.SAVE:
        return <SaveNoteForm setIsOpen={setIsOpen}/>
      case MODAL_TYPE.EDIT:
        return <EditNoteForm setOpen={setIsOpen} note={note}/>
      default:
        return;
    }
  };

  return (
    <StyledModal open={isOpen} onClose={() => setIsOpen(false)} sx={{zIndex: isOpen ? 100000 : 1000}}>
      <ModalInner>
        <ModalBackButton onClick={() => setIsOpen(false)}>
          <CloseOutlinedIcon/>
        </ModalBackButton>

        {renderForm()}
      </ModalInner>
    </StyledModal>
  );
};

export default NoteModal;