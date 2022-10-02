import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {addNote} from "../../../core/store/reducers/notesSlice/notesSlice";
import {nanoid} from "nanoid";
import {useTypedDispatch} from "../../../core/hooks/redux";
import {INote} from "../../../core/store/reducers/notesSlice/interface";
import {formatDate} from '../../../core/utils/format-time';
import {CustomLabel} from '../../../core/styled-components/custom-label';
import {CustomInput} from '../../../core/styled-components/custom-input';
import {ModalTitle} from "../styled";
import {FormButton, FormInner, FormItem} from "./styled";

interface INoteModalSaveFormProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>,
}

const SaveNoteForm: FC<INoteModalSaveFormProps> = ({setIsOpen}) => {
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
    dispatch(addNote(noteTemplate));
    setTitle('');
    setComment('');
    setIsOpen(false);
  }

  return (
    <>
      <ModalTitle variant="h5">Добавить заметку</ModalTitle>

      <FormInner onSubmit={submitHandler} component="form">
        <FormItem variant="standard" fullWidth>
          <CustomLabel shrink htmlFor="note-title">Название заметки</CustomLabel>

          <CustomInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            autoComplete="off"
            id="note-title"
            placeholder="Введите заголовок заметки"
          />
        </FormItem>

        <FormItem variant="standard" fullWidth>
          <CustomLabel shrink htmlFor="note-comment">Комментарий</CustomLabel>

          <CustomInput
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            id="note-comment"
            autoComplete="off"
            multiline
            minRows={4}
            placeholder="Введите комментарий заметки"
          />
        </FormItem>

        <FormButton type="submit" variant="contained">Добавить</FormButton>
      </FormInner>
    </>
  )
};

export default SaveNoteForm;