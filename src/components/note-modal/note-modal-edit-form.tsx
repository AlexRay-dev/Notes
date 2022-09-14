import React, {FC, useState} from 'react';
import {useTypedDispatch} from "../../hooks/redux";
import {editNote} from "../../store/reducers/notesSlice/notesSlice";
import {Box, FormControl} from "@mui/material";
import {MODAL_TITLE} from "../../shared/consts";
import {CustomButton} from '../../shared/ui/custom-components/custom-button';
import {CustomInput} from "../../shared/ui/custom-components/custom-input";
import { CustomLabel } from '../../shared/ui/custom-components/custom-label';
import {INote} from "../../store/reducers/notesSlice/interface";

interface INoteModalEditFormProps {
  setOpen: any,
  note: INote
}

const NoteModalEditForm: FC<INoteModalEditFormProps> = ({setOpen, note}) => {
  const [noteTitle, setNoteTitle] = useState<string>(note.title);
  const [noteComment, setNoteComment] = useState<string>(note.comment)
  const dispatch = useTypedDispatch();

  function submitHandler() {
    const editableNote: INote = {
      id: note.id,
      title: noteTitle,
      comment: noteComment,
      date: note.date
    }
    dispatch(editNote(editableNote))
    setOpen(false)
  }

  return (
    <Box onSubmit={submitHandler} component={"form"} sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mt: "30px",
    }}>
      <FormControl variant="standard" fullWidth sx={{mb: "24px"}}>
        <CustomLabel shrink htmlFor="note-title">Название заметки</CustomLabel>

        <CustomInput
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          required
          id="note-title"
          autoComplete="off"
          placeholder={"Введите заголовок заметки"}
        />
      </FormControl>

      <FormControl variant="standard" fullWidth>
        <CustomLabel shrink htmlFor="note-comment">Комментарий</CustomLabel>

        <CustomInput
          value={noteComment}
          onChange={(e) => setNoteComment(e.target.value)}
          id="note-comment"
          multiline
          minRows={4}
          autoComplete="off"
          placeholder={"Введите заголовк заметки"}
        />
      </FormControl>
      <CustomButton type={"submit"} variant="contained" sx={{
        maxWidth: "177px",
        mt: "40px"
      }}>
        {MODAL_TITLE.EDIT}
      </CustomButton>
    </Box>
  );
};

export default NoteModalEditForm;