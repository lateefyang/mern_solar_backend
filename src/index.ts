import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app: Express = express()
const port = process.env.EXPRESS_PORT || 8000

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server')
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})