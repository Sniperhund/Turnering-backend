import { TennisTeam } from "./database.js"

export const index = (req, res) => {
    console.log("index")
    res.send("ok")
}

export const reset = async (req, res) => {
    await TennisTeam.deleteMany()
    res.send("ok")
}

export const getAllTennisTeams = async (req, res) => {
    const teams = await TennisTeam.find()
    res.send(teams)
}

export const addTennisTeam = async (req, res) => {
    if (!req.body.name || !req.body.member) {
        return res.status(400).send("Missing name or member")
    }

    const team = new TennisTeam({
        name: req.body.name,
        member: req.body.member,
        win: req.body.win || 0,
        lost: req.body.lost || 0,
    })
    await team.save()
    res.send(team)
}

export const increaseWins = async (req, res) => {
    if (!req.query.id || !req.query.amount) {
        return res.status(400).send("Missing id or amount")
    }

    const team = await TennisTeam.findOne({ _id: req.query.id })

    if (!team) {
        return res.status(404).send("Team not found")
    }

    team.won = (team.won || 0) + parseInt(req.query.amount)

    if (team.won < 0) {
        team.won = 0
        return res.status(400).send("Won can not be negative")
    }

    await team.save()

    res.send(team)
}

export const increaseLosses = async (req, res) => {
    if (!req.query.id || !req.query.amount) {
        return res.status(400).send("Missing id or amount")
    }

    const team = await TennisTeam.findOne({ _id: req.query.id })

    if (!team) {
        return res.status(404).send("Team not found")
    }

    team.lost = (team.lost || 0) + parseInt(req.query.amount)

    if (team.lost < 0) {
        team.lost = 0
        return res.status(400).send("Lost can not be negative")
    }

    await team.save()

    res.send(team)
}
