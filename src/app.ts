import Express  from "express";
import { Book, User } from "./type";
import UserClient from "./UserClient";
import {json} from 'body-parser'
import BookClient from "./BookClient";


const startServer = async () => {
    const userClient : UserClient = new UserClient()
    const bookClient : BookClient = new BookClient()
    const app : Express.Application = Express()
    app.use(json())
    app.put('/user', async (req : Express.Request, res : Express.Response) => {
        try {
            await userClient.save(req.body as User)
            res.json({
                status: "success"
            })
        } catch(error) {
            console.log("error", error)
            res.json({
                status: "error"
            })
        }
    })
    app.get('/user/all', async (req : Express.Request, res : Express.Response) => {
        try {
            const user : User[] = await userClient.getAll()
            res.json(user)
        } catch(error) {
            console.log("error", error)
            res.json({
                status: "error"
            })
        }
    })

    app.put('/book', async (req : Express.Request, res : Express.Response) => {
        try {
            await bookClient.save(req.body as Book)
            res.json({
                status: "success"
            })
        } catch(error) {
            console.log("error", error)
            res.json({
                status: "error"
            })
        }
    })
    app.get('/user/all', async (req : Express.Request, res : Express.Response) => {
        try {
            const books : Book[] = await bookClient.getAll()
            res.json(books)
        } catch(error) {
            console.log("error", error)
            res.json({
                status: "error"
            })
        }
    })


    app.listen(8000, () => {
        console.log(`started server`)
    })
}

startServer()