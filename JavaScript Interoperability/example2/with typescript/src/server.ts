import express,{Request, Response, Express} from 'express'

const app:Express = express();

app.get('/', (req:Request, res:Response) => {
    res.send("hello ts")
})

app.get('/getName', (req:Request, res:Response) => {
    res.send("Arpit Patil");
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})