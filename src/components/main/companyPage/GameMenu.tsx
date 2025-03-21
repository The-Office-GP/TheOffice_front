import {Dispatch, FC, SetStateAction} from 'react';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PeopleIcon from '@mui/icons-material/People';
import "../../../@styles/main/components/companyPage/gameMenu.css"

const GameMenu: FC<{setPage:Dispatch<SetStateAction<number>>}> = ({setPage}) => {
    return (
        <nav className={"game-nav"}>
            <ImportantDevicesIcon className={"menu-icon"} onClick={() => setPage(1)}/>
            <PrecisionManufacturingIcon className={"menu-icon"} onClick={() => setPage(2)}/>
            <PeopleIcon className={"menu-icon"} onClick={() => setPage(3)}/>
        </nav>
    );
};

export default GameMenu;
