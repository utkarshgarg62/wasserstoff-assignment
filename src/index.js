const express = require("express")
const mongoose = require("mongoose")
// const session = require("express-session")
const route = require("./routes/route")
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())

app.get("/", (request, response) => {
    response.status(200).send("API IS RUNNING")
})

// app.use(session({
//     secret: "dharam-digital",
//     resave: false,
//     saveUninitialized: false
// }))

mongoose.connect("mongodb+srv://functionup-radon-cohort:radon123@cluster0.zbsotuc.mongodb.net/wasserstoff", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDB Connected Successfully", process.pid))
    .catch((err) => console.error(err))


app.use("/", route)

app.listen(PORT, () => {
    console.log("Express running on port ", PORT)
})