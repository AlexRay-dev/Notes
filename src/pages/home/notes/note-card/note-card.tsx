import React, {FC, useState} from 'react';
import {Stack, Typography} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from "react-router-dom";
import {INote} from "../../../../core/store/reducers/notesSlice/interface";
import theme from "../../../../core/theme/theme";
import {StyledActionArea, StyledCardContent, StyledCardTitle, StyledNoteCard} from "./styled";

interface INoteCardProps {
  note: INote,
}

const NoteCard: FC<INoteCardProps> = ({note}) => {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const navigate = useNavigate();
  const {title, date} = note;

  return (
    <StyledNoteCard onMouseEnter={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)}>
      <StyledActionArea onClick={() => navigate(`/note/${note.id}`)}>
        <StyledCardContent>
          <StyledCardTitle color="text.secondary">
            {title}
          </StyledCardTitle>

          <Stack direction="row" justifyContent="space-between" alignItems="center" pt="10px">
            <Typography variant="body2" fontSize={13}>{date}</Typography>

            <ArrowForwardIcon sx={{fill: showIcon ? theme.palette.primary.main : "none"}}/>
          </Stack>
        </StyledCardContent>
      </StyledActionArea>
    </StyledNoteCard>
  );
};

export default NoteCard;