import {Dispatch, FC, SetStateAction} from 'react';
import "../../@styles/main/components/global/exitButton.css"
import ReplyIcon from '@mui/icons-material/Reply';
import {IconButton} from "@mui/material";
import {paletteColors} from "../../@styles/paletteColors";

const MachineExitButton: FC<{ setPage: Dispatch<SetStateAction<boolean>> }> = ({setPage}) => {
    return (
        <IconButton aria-label="delete" onClick={() => setPage(false)}
                    sx={{position: "absolute", top: 0, left: 0, color: paletteColors.white, margin: 0}}>
            <ReplyIcon fontSize={"large"}/>
        </IconButton>
    );
};

export default MachineExitButton;
