import mongoose from "mongoose"

await mongoose.connect(
    "mongodb://root:7ytSAoKiQyF76gueEbPHqL3ezBu1d70UTlG16ydEiMDeU4UhLy1TTPeCfUtvYnHF@213.199.41.61:5432/?directConnection=true"
)

const testSchema = new mongoose.Schema({
    name: String,
})

export const Test = mongoose.model("Test", testSchema)
