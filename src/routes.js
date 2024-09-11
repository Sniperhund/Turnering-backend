import { Test } from "./database.js"

export const index = (req, res) => {
    //let test = new Test({ name: "Test" })

    //test.save()

    res.send("Hello World from route!")
}
