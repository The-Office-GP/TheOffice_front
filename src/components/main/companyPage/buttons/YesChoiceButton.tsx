import {FC} from 'react';
import "../../../../@styles/main/components/companyPage/choiceButton.css"

const YesChoiceButton: FC<{}> = ({}) => {
    return (
        <div className={"choice"}>
            <p className={"p-choice"}>YES</p>
            <img
                src={"https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67c45ec909d9eab7925d024b/download/Right-choice.png"}
                alt={"flèche droite recruter"} className={"choice-button-yes"}/>
        </div>
    );
};

export default YesChoiceButton;
