export interface User {
    email : string, 
    age : number, 
    books? : Book[]
}

export interface Book {
    name: string, 
    price: number, 
    authorId: number
}
