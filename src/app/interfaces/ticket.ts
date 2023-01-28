import { Label } from "./label";

export interface Ticket {
    id: string,
    title: string,
    text: string,
    label?: Label
}
