import { PrismaClient } from "@prisma/client";
import { Book, User } from "./type";

export default class UserClient {

    client : PrismaClient 

    constructor() {
        this.client = new PrismaClient()
    }

    async save(user : User) {
        try {
            await this.client.user.create({
                data : user 
            })
        } catch(ex) {
            this.client.$disconnect()
            throw ex 
        }
    }

    async getAll() : Promise<User[]> {
        try {
            const users : User[] = await this.client.user.findMany({
                include: {
                    books: true
                }
            })
            return users 
        } catch(ex) {
            this.client.$disconnect()
            throw ex 
        }
    }
}