import React, {useState} from "react";
import GoodChoiceCard from "./GoodChoiceCard";
import eventsJson from "../../../../@data/event.json"
import {EventData,EventType} from "../../../../@types/envent";
import "../../../styles/components/cards/EventCard.css";
import NoChoiceButton from "./NoChoiceButton";
import YesChoiceButton from "./YesChoiceButton";
import BadChoiceCard from "./BadChoiceCard";

// Cast des données JSON en EventData
const eventsData = eventsJson as EventData;
const events: EventType[] = eventsData.events;

type Props = {
    eventId: number;
};
console.log("Liste des events:", events);


const EventChoice: React.FC<Props> = ({}) => {
    const [choice, setChoice] = useState<null | "yes" | "no">(null);

    const selectedEvent = events.find((e) =>
    e.id);

    if (!selectedEvent) {
        return (
            <div className="event-choice-card-container">
                <div className="event-card-header">
                    <div className="event-info">
                        <h3>Événement</h3>
                    </div>
                </div>
                <div className="choice-place">
                    <div className="choice-card">
                        <img
                            src="/assets/avatars-event/avatar-homme-question%201.png"
                            alt="choice preview"
                            className="choice-card-picture"
                        />
                        <p>Événement introuvable 🚫</p>
                        <button onClick={() => window.location.reload()}>Réessayer</button>
                    </div>
                </div>
            </div>
        );
    }
    const handleChoice = (val: "yes" | "no") => setChoice(val);
    const handleContinue = () => setChoice(null);

    return (
        <div className="event-choice-card-container" key={selectedEvent.id}>
            <div className="event-card-header">
                <div className="event-info">
                    <h3>Événement</h3>
                    <h4>{selectedEvent.title}</h4>
                    <p>{selectedEvent.description}</p>
                </div>
            </div>
            {!choice && (
                <div className="choice-place">
                    <NoChoiceButton onClick={() => handleChoice("no")}/>
                    <div className="choice-card">
                        <img
                            src="/assets/avatars-event/avatar-homme-question%201.png"
                            alt="choice preview"
                            className="choice-card-picture"
                        />
                        <p className="choice-description">{selectedEvent.consequencesPreview}</p>
                    </div>
                    <YesChoiceButton onClick={() => handleChoice("yes")}/>
                </div>
            )}
            {choice === "yes" && (
                <div className="choice-overlay">
                    <GoodChoiceCard data={selectedEvent.goodChoice}/>
                    <button onClick={handleContinue}>Continuer</button>
                </div>
            )}
            {choice === "no" && (
                <div className="choice-overlay">
                    <BadChoiceCard data={selectedEvent.badChoice}/>
                    <button onClick={handleContinue}>Continuer</button>
                </div>
            )}
        </div>
    );
};

export default EventChoice;