import mongoose from "mongoose"

await mongoose.connect(
    "mongodb://root:7ytSAoKiQyF76gueEbPHqL3ezBu1d70UTlG16ydEiMDeU4UhLy1TTPeCfUtvYnHF@213.199.41.61:5432/?directConnection=true"
)

const tennisTeamSchema = new mongoose.Schema({
    name: String,
    member: String,
    won: Number,
    lost: Number,
})

export const TennisTeam = mongoose.model("TennisTeam", tennisTeamSchema)
