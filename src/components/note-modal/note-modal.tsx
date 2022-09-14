import React, {FC} from 'react';
import {Box, IconButton, Modal, Typography} from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import theme from "../../shared/ui/theme";
import NoteModalSaveForm from "./note-modal-save-form";
import NoteModalEditForm from "./note-modal-edit-form";
import {getModalTitle} from "./utils/get-modal-title";
import {INote} from "../../store/reducers/notesSlice/interface";

interface INoteModalProps {
  isOpen: any,
  setIsOpen: any,
  modalType: string,
  note?: INote
}

const NoteModal: FC<INoteModalProps> = ({isOpen, setIsOpen, modalType, note}) => {
  const modalTitle = getModalTitle(modalType)

  const renderForm = () => {
    switch (modalType) {
      case "save":
        return <NoteModalSaveForm setIsOpen={setIsOpen}/>
      case "edit":
        // @ts-ignore
        return <NoteModalEditForm setOpen={setIsOpen} note={note}/>
      default:
        return <h6>форма отсутствует</h6>
    }
  }

  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)} sx={{
      background: "rgba(69, 74, 99, .8)",
      zIndex: isOpen ? 100000 : 1000,
    }}>
      <Box sx={{
        maxWidth: "470px",
        width: "100%",
        bgcolor: 'white',
        p: "40px 65px",
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.16)",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        [theme.breakpoints.down('sm')]: {
          p: "20px"
        }
      }}>
        <IconButton onClick={() => setIsOpen(false)} sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          color: "#E5E5E5",
          ":hover": {
            color: theme.palette.secondary.light
          }
        }}>
          <CloseOutlinedIcon/>
        </IconButton>

        <Typography variant={"h5"} fontWeight={500} textAlign={"center"}>
          {modalTitle} заметку
        </Typography>

        {renderForm()}
      </Box>
    </Modal>
  );
};

export default NoteModal;