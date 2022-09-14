import React, {FC} from 'react';
import {Button, Dialog, DialogActions, DialogTitle} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useTypedDispatch} from "../../hooks/redux";
import {removeNote} from "../../store/reducers/notesSlice/notesSlice";

interface IRemoveDialogProps {
  id: string,
  isOpen: boolean,
  setIsOpen: any
}

const RemoveDialog: FC<IRemoveDialogProps> = ({setIsOpen, isOpen, id}) => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  function removeNoteHandler() {
    dispatch(removeNote(id))
    navigate('/')
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} sx={{zIndex: 100001}}>
      <DialogTitle id="alert-dialog-title">
        Вы действительно хотите удалить заметку?
      </DialogTitle>

      <DialogActions>
        <Button variant={"outlined"} onClick={removeNoteHandler}>Удалить</Button>
        <Button variant={"outlined"} onClick={() => setIsOpen(false)} autoFocus>Отменить</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RemoveDialog;