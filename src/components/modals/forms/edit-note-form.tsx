import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {useTypedDispatch} from "../../../core/hooks/redux";
import {editNote} from "../../../core/store/reducers/notesSlice/notesSlice";
import {INote} from "../../../core/store/reducers/notesSlice/interface";
import {CustomLabel} from '../../../core/styled-components/custom-label';
import {CustomInput} from '../../../core/styled-components/custom-input';
import {ModalTitle} from "../styled";
import {FormButton, FormInner, FormItem} from './styled';

interface INoteModalEditFormProps {
  setOpen: Dispatch<SetStateAction<boolean>>,
  note?: INote,
}

const EditNoteForm: FC<INoteModalEditFormProps> = ({setOpen, note}) => {
  const [noteTitle, setNoteTitle] = useState<string>(note ? note.title : "");
  const [noteComment, setNoteComment] = useState<string>(note ? note.comment : "");
  const dispatch = useTypedDispatch();

  if (!note) return null;

  const submitHandler = () => {
    const editableNote: INote = {
      id: note.id,
      title: noteTitle,
      comment: noteComment,
      date: note.date
    };
    dispatch(editNote(editableNote));
    setOpen(false);
  }

  return (
    <>
      <ModalTitle variant="h5">Править заметку</ModalTitle>

      <FormInner onSubmit={submitHandler} component="form">
        <FormItem variant="standard" fullWidth>
          <CustomLabel shrink htmlFor="edit-note-title">Название заметки</CustomLabel>

          <CustomInput
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            required
            id="edit-note-title"
            autoComplete="off"
            placeholder="Введите заголовок заметки"
          />
        </FormItem>

        <FormItem variant="standard" fullWidth>
          <CustomLabel shrink htmlFor="edit-note-comment">Комментарий</CustomLabel>

          <CustomInput
            value={noteComment}
            onChange={(e) => setNoteComment(e.target.value)}
            id="edit-note-comment"
            multiline
            minRows={4}
            autoComplete="off"
            placeholder="Введите комментарий заметки"
          />
        </FormItem>

        <FormButton type="submit" variant="contained">Править</FormButton>
      </FormInner>
    </>
  );
};

export default EditNoteForm;