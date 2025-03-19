import {Dispatch, FC, SetStateAction} from 'react';
import "../../@styles/main/components/global/exitButton.css"
import ReplyIcon from '@mui/icons-material/Reply';
import {IconButton} from "@mui/material";
import {paletteColors} from "../../@styles/paletteColors";

const ExitButton: FC<{setPage:Dispatch<SetStateAction<any>>}> = ({setPage}) => {
    return (
        <IconButton aria-label="delete" onClick={()=> setPage(0)} sx={{color: paletteColors.white, margin: 0}}>
            <ReplyIcon fontSize={"large"}/>
        </IconButton>
    );
};

export default ExitButton;
