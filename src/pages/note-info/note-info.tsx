import React, {FC, useState} from 'react';
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {useTypedSelector} from "../../core/hooks/redux";
import {selectNotes} from "../../core/store/reducers/notesSlice/notesSlice";
import {INote} from "../../core/store/reducers/notesSlice/interface";
import {CustomHidingButton} from '../../core/styled-components/custom-button';
import {CustomFab} from '../../core/styled-components/custom-fab';
import {NoteInfoBackButton, NoteInfoInner, NoteInfoTitle} from "./styled";
import RemoveDialog from "../../components/modals/remove-dialog";
import NoteModal from "../../components/modals/note-modal";
import {MODAL_TYPE} from "../../core/types/types";

const NoteInfo: FC = () => {
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const [isOpenRemoveDialog, setIsOpenRemoveDialog] = useState<boolean>(false);

  const navigate = useNavigate();
  const {id} = useParams();
  const {notes} = useTypedSelector(selectNotes);
  const currentNote = notes.find((note: INote) => note.id === id);

  if (!currentNote || !id) return (
    <Typography variant="h4" pt="84px">Заметка не найдена... Вернуться на <NavLink to="/">главную</NavLink></Typography>
  );

  return (
    <NoteInfoInner>
      <NoteInfoBackButton aria-label="back" onClick={() => navigate('/')}>
        <ArrowBackIcon/>
      </NoteInfoBackButton>

      <Stack direction="row" justifyContent="space-between" alignItems="center" mb="50px" mt="23px">
        <NoteInfoTitle variant="h2">
          {currentNote.title}
        </NoteInfoTitle>

        <Box ml="30px">
          <CustomHidingButton
            onClick={() => setIsOpenEditModal(true)}
            startIcon={<EditOutlinedIcon/>}
            variant="contained">
            Править заметку
          </CustomHidingButton>

          <CustomFab
            onClick={() => setIsOpenEditModal(true)}
            color="primary"
            aria-label="edit">
            <EditOutlinedIcon/>
          </CustomFab>
        </Box>
      </Stack>

      <Box>
        <Typography variant="body1" color="secondary.light" mb="24px">
          {currentNote.comment}
        </Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb="33px">
          <Typography variant="body2">
            {currentNote.date}
          </Typography>

          <IconButton onClick={() => setIsOpenRemoveDialog(true)}>
            <DeleteOutlineOutlinedIcon/>
          </IconButton>
        </Stack>
        <Divider variant="fullWidth" color="#EDEEF2"/>
      </Box>

      <RemoveDialog isOpen={isOpenRemoveDialog} setIsOpen={setIsOpenRemoveDialog} id={id}/>
      <NoteModal isOpen={isOpenEditModal} setIsOpen={setIsOpenEditModal} modalType={MODAL_TYPE.EDIT} note={currentNote}/>
    </NoteInfoInner>
  );
};

export default NoteInfo;