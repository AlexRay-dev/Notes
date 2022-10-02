import React, {FC} from 'react';
import {Grid, Typography} from "@mui/material";
import NoteCard from "./note-card/note-card";
import {useTypedSelector} from "../../../core/hooks/redux";
import {selectNotes} from "../../../core/store/reducers/notesSlice/notesSlice";

const Notes: FC = () => {
  const {notes} = useTypedSelector(selectNotes);
  const isNotesListEmpty = !notes.length;

  if (isNotesListEmpty) return <Typography variant={"h4"}>Список заметок пуст</Typography>;

  return (
    <Grid container spacing={2}>
      {notes.map(note =>
        <Grid key={note.id} item lg={3} md={4} sm={6} xs={12}>
          <NoteCard note={note}/>
        </Grid>
      )}
    </Grid>
  );
};

export default Notes;