import express from "express"
import fs from "fs"
import YAML from "yaml"
import swaggerUi from "swagger-ui-express"
import cors from "cors"
import {
    index,
    getAllTennisTeams,
    addTennisTeam,
    increaseWins,
    increaseLosses,
} from "./routes.js"

const app = express()

const port = 3000

app.get("/", index)
app.get("/tennis/teams", getAllTennisTeams)
app.post("/tennis/team", addTennisTeam)
app.get("/tennis/win", increaseWins)
app.get("/tennis/loss", increaseLosses)

const file = fs.readFileSync("./src/swagger.yaml", "utf8")
const swaggerDocument = YAML.parse(file)

app.use(cors())
app.use(
    "/docs",
    function (req, res, next) {
        req.swaggerDoc = swaggerDocument
        next()
    },
    swaggerUi.serveFiles(swaggerDocument),
    swaggerUi.setup()
)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
