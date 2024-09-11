import express from "express"
const app = express()

import { index } from "./routes.js"

const port = 3000

app.get("/", index)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
