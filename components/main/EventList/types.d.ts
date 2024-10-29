export interface Event {
    id: string;
    title: string;
    description: string;
    date: Date;
    location: string;
    attendees: number;
}

export interface AddEventAction {
    type: 'ADD_EVENT';
    payload: Event;
}

export interface RemoveEventAction {
    type: 'REMOVE_EVENT';
    payload: { id: string };
}

export interface UpdateEventAction {
    type: 'UPDATE_EVENT';
    payload: Event;
}

export type EventActionTypes = AddEventAction | RemoveEventAction | UpdateEventAction;