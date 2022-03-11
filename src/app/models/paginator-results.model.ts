import { PaginatorInfo } from "./paginator-info.model";

export interface PaginatorResults<T> {
    info?: PaginatorInfo | null
    results: T[]
}