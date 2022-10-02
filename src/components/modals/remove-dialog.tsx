import React, {Dispatch, FC, SetStateAction} from 'react';
import {Button, Dialog, DialogActions, DialogTitle} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useTypedDispatch} from "../../core/hooks/redux";
import {removeNote} from "../../core/store/reducers/notesSlice/notesSlice";

interface IRemoveDialogProps {
  id: string,
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
}

const RemoveDialog: FC<IRemoveDialogProps> = ({setIsOpen, isOpen, id}) => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const removeNoteHandler = () => {
    dispatch(removeNote(id));
    navigate('/');
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} sx={{zIndex: 100001}}>
      <DialogTitle id="alert-dialog-title">Вы действительно хотите удалить заметку?</DialogTitle>

      <DialogActions>
        <Button variant="outlined" onClick={removeNoteHandler}>Удалить</Button>
        <Button variant="outlined" onClick={() => setIsOpen(false)}>Отменить</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RemoveDialog;