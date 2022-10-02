import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {INote, NotesState} from "./interface";
import {RootState} from "../../store";

const initialState: NotesState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<INote>) {
      state.notes.push(action.payload);
    },
    removeNote(state, action: PayloadAction<string>) {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
    editNote(state, action: PayloadAction<INote>) {
      state.notes = state.notes.map(note => {
        if (note.id === action.payload.id) {
          return action.payload
        }
        return note
      });
    }
  }
});

export const {
  addNote,
  removeNote,
  editNote,
} = notesSlice.actions;
export const selectNotes = (state: RootState) => state.notesReducer;
export default notesSlice.reducer;