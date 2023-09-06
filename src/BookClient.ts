import { PrismaClient } from "@prisma/client"
import { Book } from "./type"

export default class BookClient {
    client : PrismaClient 

    constructor() {
        this.client = new PrismaClient()
    }

    async save(book : Book) {
        try {
            await this.client.book.create({
                data: book 
            })
        } catch(err) {
            this.client.$disconnect()
            console.error(err)
            throw err 
        }
    }

    async getAll() : Promise<Book[]> {
        try {
            const books : Book[] = await this.client.book.findMany()
            return books  
        } catch(ex) {
            this.client.$disconnect()
            throw ex 
        }
    }
}