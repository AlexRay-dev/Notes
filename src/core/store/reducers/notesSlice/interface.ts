export interface INote {
  id: string,
  title: string,
  comment: string,
  date: string,
}
export interface NotesState {
  notes: INote[]
}