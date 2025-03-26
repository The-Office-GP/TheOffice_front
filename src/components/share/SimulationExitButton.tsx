import {Dispatch, FC, SetStateAction} from 'react';
import "../../@styles/main/components/global/exitButton.css"
import ReplyIcon from '@mui/icons-material/Reply';
import {IconButton} from "@mui/material";
import {paletteColors} from "../../@styles/paletteColors";

const SimulationExitButton: FC<{ setPage: Dispatch<SetStateAction<any>> }> = ({setPage}) => {
    return (
        <IconButton aria-label="delete" onClick={() => setPage(1)}
                    sx={{position: "absolute", top: 15, left: 18, color: paletteColors.white, margin: 0}}>
            <ReplyIcon fontSize={"large"}/>
        </IconButton>
    );
};

export default SimulationExitButton;
