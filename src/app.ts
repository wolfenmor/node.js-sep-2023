import {userRouter} from "./routers/user.router";


const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = 5100;


app.use("/users", userRouter)

app.listen(PORT, () => {
    console.log(`"server has started" on ${PORT}`)
})