import { Column } from "./column";
import { Status } from "./status";

export interface Board {
    id: string,
    name: string,
    columns: Column[],
}
