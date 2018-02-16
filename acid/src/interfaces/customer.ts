export interface ICustomer {
    cid      : number,
    phone   ?: number[],
    city    ?: string,
    address ?: string,
    cross   ?: string,
    note    ?: string,
    name    ?: string,
    type    ?: string,
    email   ?: string,
    ordered ?: number
}