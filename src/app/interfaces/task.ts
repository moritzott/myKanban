import { Category } from "./category";
import { Link } from "./link";
import { Status } from "./status";
import { Tag } from "./tag";

export interface Task {
    title: string,
    description?: string,
    categories?: Category[],
    tags: Tag[]
    status: Status,
    links: Link[]
}
