import React, {FC, useState} from 'react';
import {Box, Card, CardActionArea, CardContent, Typography} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from "react-router-dom";
import theme from "../../../shared/ui/theme";
import {INote} from "../../../store/reducers/notesSlice/interface";

interface INoteCardProps {
  note: INote
}

const NoteCard: FC<INoteCardProps> = ({note}) => {
  const [showIcon, setShowIcon] = useState(false);
  const navigate = useNavigate();
  const {title, date} = note;

  return (
    <Card onMouseEnter={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)} sx={{
      minWidth: "250px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.06)",
      borderRadius: 0,
      bgcolor: "white",
      minHeight: "110px",
      height: "100%",
      ":hover": {
        boxShadow: "0px 16px 36px rgba(0, 0, 0, 0.05)",
      },
    }}>
      <CardActionArea onClick={() => navigate(`/note/${note.id}`)} sx={{height: "100%"}}>
        <CardContent
          sx={{
            p: "19px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
          <Typography sx={{
            fontSize: 16,
            fontWeight: "500",
            lineHeight: 1.2,
            wordWrap: "break-word",
            display: "-webkit-box",
            "-webkit-line-clamp": "2",
            "-webkit-box-orient": "vertical",
            overflow: "hidden",
          }} color="text.secondary">
            {title}
          </Typography>
          <Box sx={{
            display: "flex", justifyContent: "space-between", alignItems: "center", pt: "10px"
          }}>
            <Typography variant="body2" fontSize={13}>
              {date}
            </Typography>
            <ArrowForwardIcon sx={{
              fill: showIcon ? theme.palette.primary.main : "none",
            }}/>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NoteCard;