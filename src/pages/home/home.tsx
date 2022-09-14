import React, {FC, useState} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import Notes from "./notes/notes";
import AddIcon from '@mui/icons-material/Add';
import NoteModal from "../../components/note-modal/note-modal";
import {MODAL_TYPE} from "../../shared/consts";
import {CustomButton} from '../../shared/ui/custom-components/custom-button';
import {CustomFab} from '../../shared/ui/custom-components/custom-fab';

const Home: FC = () => {
  const [isOpenAddNoteModal, setIsOpenAddNoteModal] = useState(false)

  return (
    <Box sx={{minHeight: "calc(100vh - 72px)", pt: {"xs": "20px", "sm": "84px"}}}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography component="h2" variant="h2">Заметки</Typography>

        <CustomButton
          onClick={() => setIsOpenAddNoteModal(true)}
          startIcon={<AddIcon/>} variant={"contained"}
          sx={{display: {"xs": "none", "sm": "flex"}, maxWidth: "230px"}}>
          Добавить заметку
        </CustomButton>
        <CustomFab
          onClick={() => setIsOpenAddNoteModal(true)}
          color="primary"
          aria-label="add">
          <AddIcon/>
        </CustomFab>
      </Stack>
      <Box sx={{pb: "20px", pt: {"xs": "20px", "sm": "70px"}}}>
        <Notes/>
      </Box>

      <NoteModal isOpen={isOpenAddNoteModal} setIsOpen={setIsOpenAddNoteModal} modalType={MODAL_TYPE.SAVE}/>
    </Box>
  );
};

export default Home;