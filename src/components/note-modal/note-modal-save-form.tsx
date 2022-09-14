import React, {FC, useState} from 'react';
import {Box, FormControl} from "@mui/material";
import {addNote} from "../../store/reducers/notesSlice/notesSlice";
import {nanoid} from "nanoid";
import {useTypedDispatch} from "../../hooks/redux";
import {MODAL_TITLE} from "../../shared/consts";
import {formatDate} from "../../shared/utils/format-time";
import {CustomButton} from "../../shared/ui/custom-components/custom-button";
import {CustomInput} from '../../shared/ui/custom-components/custom-input';
import {CustomLabel} from "../../shared/ui/custom-components/custom-label";
import {INote} from "../../store/reducers/notesSlice/interface";

interface INoteModalSaveFormProps {
  setIsOpen: any,
}

const NoteModalSaveForm: FC<INoteModalSaveFormProps> = ({setIsOpen}) => {
  const [title, setTitle] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const dispatch = useTypedDispatch();

  function submitHandler() {
    const noteTemplate: INote = {
      id: nanoid(8),
      title: title,
      comment: comment,
      date: formatDate(new Date())
    }
    dispatch(addNote(noteTemplate))
    setTitle('')
    setComment('')
    setIsOpen(false)
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          autoComplete="off"
          id="note-title"
          placeholder={"Введите заголовк заметки"}
        />
      </FormControl>

      <FormControl variant="standard" fullWidth>
        <CustomLabel shrink htmlFor="note-comment">Комментарий</CustomLabel>

        <CustomInput
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          id="note-comment"
          autoComplete="off"
          multiline
          minRows={4}
          placeholder={"Введите заголовк заметки"}
        />
      </FormControl>
      <CustomButton type={"submit"} variant="contained" sx={{
        maxWidth: "177px",
        mt: "40px"
      }}>
        {MODAL_TITLE.SAVE}
      </CustomButton>
    </Box>
  );
};

export default NoteModalSaveForm;