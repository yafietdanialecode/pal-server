// imports
import express, { Express, Request, Response } from "express"


// variables
const app: Express = express()
const morgan = require("morgan")
let port = 3000

// use
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('tiny'))


// set
app.set("view engine", "ejs")
app.set("views", __dirname + "/../pages/ejs")


// listen
app.listen(port, 'localhost', ()=>{
    console.log('server is listening on port: ' + port)
})


// get



// post



// put



// delete


// 404
app.use((req: Request, res: Response) => {
    res.status(404).render("404", { title: "Page Not Found"})
})
