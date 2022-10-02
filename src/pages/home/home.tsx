import React, {FC, useState} from 'react';
import {Stack, Typography} from "@mui/material";
import Notes from "./notes/notes";
import AddIcon from '@mui/icons-material/Add';
import {CustomFab} from '../../core/styled-components/custom-fab';
import {HomeInner, HomeList} from "./styled";
import {CustomHidingButton} from "../../core/styled-components/custom-button";
import NoteModal from "../../components/modals/note-modal";
import {MODAL_TYPE} from "../../core/types/types";

const Home: FC = () => {
  const [isOpenAddNoteModal, setIsOpenAddNoteModal] = useState<boolean>(false);

  return (
    <HomeInner>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography component="h2" variant="h2">Заметки</Typography>

        <CustomHidingButton
          onClick={() => setIsOpenAddNoteModal(true)}
          startIcon={<AddIcon/>} variant="contained">
          Добавить заметку
        </CustomHidingButton>
        <CustomFab
          onClick={() => setIsOpenAddNoteModal(true)}
          color="primary"
          aria-label="add">
          <AddIcon/>
        </CustomFab>
      </Stack>

      <HomeList>
        <Notes/>
      </HomeList>

      <NoteModal isOpen={isOpenAddNoteModal} setIsOpen={setIsOpenAddNoteModal} modalType={MODAL_TYPE.SAVE}/>
    </HomeInner>
  );
};

export default Home;