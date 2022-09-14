import React, {FC, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {
  Box,
  Divider, Fab,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import theme from "../../shared/ui/theme";
import {useTypedSelector} from "../../hooks/redux";
import RemoveDialog from "../../components/note-modal/remove-dialog";
import NoteModal from "../../components/note-modal/note-modal";
import {MODAL_TYPE} from "../../shared/consts";
import {CustomButton} from '../../shared/ui/custom-components/custom-button';
import {selectNotes} from "../../store/reducers/notesSlice/notesSlice";
import {INote} from "../../store/reducers/notesSlice/interface";
import AddIcon from "@mui/icons-material/Add";
import {CustomFab} from "../../shared/ui/custom-components/custom-fab";

const NoteInfo: FC = () => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenRemoveDialog, setIsOpenRemoveDialog] = useState(false);

  const navigate = useNavigate();
  const {id} = useParams()
  const {notes} = useTypedSelector(selectNotes)
  const currentNote = notes.find((note: INote) => note.id === id)

  if (!currentNote || !id) return <h2>Заметка не найдена...</h2>;

  return (
    <Box pt={"27px"} sx={{
      minHeight: "calc(100vh - 72px)"
    }}>
      <IconButton aria-label="back" onClick={() => navigate('/')} sx={{
        color: "#E6E6E6",
        ":hover": {
          color: theme.palette.secondary.light
        }
      }}>
        <ArrowBackIcon/>
      </IconButton>
      <Stack direction="row" justifyContent="space-between" mb={"50px"} mt={"20px"}>
        <Typography component="h2" variant="h2" sx={{
          wordWrap: "break-word", [theme.breakpoints.down("sm")]: {
            fontSize: "28px"
          }
        }}>
          {currentNote.title}
        </Typography>
        <Box ml={"30px"}>
          <CustomButton
            onClick={() => setIsOpenEditModal(true)}
            startIcon={<EditOutlinedIcon/>}
            variant="contained"
            sx={{display: {"xs": "none", "sm": "flex"}}}>
            Править заметку
          </CustomButton>
          <CustomFab
            onClick={() => setIsOpenEditModal(true)}
            color="primary"
            aria-label="edit">
            <EditOutlinedIcon/>
          </CustomFab>
        </Box>
      </Stack>

      <Box>
        <Typography variant={"body1"} color={"secondary.light"} mb={"24px"}>
          {currentNote.comment}
        </Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={"33px"}>
          <Typography variant="body2">
            {currentNote.date}
          </Typography>

          <IconButton onClick={() => setIsOpenRemoveDialog(true)}>
            <DeleteOutlineOutlinedIcon/>
          </IconButton>
        </Stack>
        <Divider variant="fullWidth" color={"#EDEEF2"}/>
      </Box>

      <RemoveDialog isOpen={isOpenRemoveDialog} setIsOpen={setIsOpenRemoveDialog} id={id}/>
      <NoteModal isOpen={isOpenEditModal} setIsOpen={setIsOpenEditModal} modalType={MODAL_TYPE.EDIT} note={currentNote}/>
    </Box>
  );
};

export default NoteInfo;