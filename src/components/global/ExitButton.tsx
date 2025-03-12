import {FC} from 'react';
import "../../@styles/b_main/components/global/exitButton.css"

const ExitButton: FC<{}> = ({}) => {
    return (
        <img
            src={"https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67bde1ff4f7314b58e617663/download/Exit.png"}
            alt={"exit"} className={"exit"}
        />
    );
};

export default ExitButton;
