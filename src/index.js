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
    reset,
} from "./routes.js"

const app = express()

const port = 3001

app.use(cors())
app.use(express.json())

const file = fs.readFileSync("./src/swagger.yaml", "utf8")
const swaggerDocument = YAML.parse(file)

app.use(
    "/docs",
    function (req, res, next) {
        req.swaggerDoc = swaggerDocument
        next()
    },
    swaggerUi.serveFiles(swaggerDocument),
    swaggerUi.setup()
)

app.get("/", index)
app.get("/reset", reset)
app.get("/tennis/teams", getAllTennisTeams)
app.post("/tennis/team", addTennisTeam)
app.get("/tennis/win", increaseWins)
app.get("/tennis/loss", increaseLosses)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}).on("error", (err) => {
    console.error(err)
})
