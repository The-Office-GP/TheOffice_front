import {FC} from "react";
import "../../../styles/components/cards/EventCard.css";
import "../../../styles/components/cards/BadAndGoodChoiceCard.css";
import {Consequence} from "../../../../@types/envent";

const BadChoiceCard: FC<{ data: Consequence }> = ({data}) => {
    return (
        <div className="choice-card">
            <img
                src="/public/assets/avatars-event/AvatarGoodChoice.png"
                alt="consequence-picture"
                className="choice-consequences-picture"
            />
            <div className="choice-consequences">
                <p>Coût</p>
                <progress max={2} value={data.costs}></progress>
                <p>Humeur générale</p>
                <progress max={2} value={data.mood}></progress>
                <p>Production</p>
                <progress max={2} value={data.production}></progress>
                <p>Popularité</p>
                <progress max={2} value={data.popularity}></progress>
            </div>
        </div>
    );
};

export default BadChoiceCard;