import {FC} from 'react';
import "../../../styles/components/buttons/ChoiceButton.css";

type Props = {
    onClick?: () => void;
};

const YesChoiceButton: FC<Props> = ({onClick}) => {
    return (
        <div className="choice" onClick={onClick}>
            <p className="p-choice">OUI</p>
            <img
                src="https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67c45ec909d9eab7925d024b/download/Right-choice.png"
                alt="flèche droite recruter"
                className="choice-button-yes"
            />
        </div>
    );
};

export default YesChoiceButton;