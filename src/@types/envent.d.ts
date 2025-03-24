export interface EventData {
    events: EventType[];
}

export interface EventType {
    id: number;
    title: string;
    description: string;
    consequencesPreview: string;
    firstChoice: string;  // "Oui"
    secondChoice: string; // "Non"
    goodChoice: Consequence;
    badChoice: Consequence;
}

export interface Consequence {
    costs: number;
    mood: number;
    production: number;
    popularity: number;
}