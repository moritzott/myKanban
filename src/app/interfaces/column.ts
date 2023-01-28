import { Ticket } from "./ticket";

export interface Column {
    id: string,
    name: string,
    tickets: Ticket[]
}
