import { Status } from "./status";

export interface Board {
    columns: Status[]
    tasks: Task[]
}
