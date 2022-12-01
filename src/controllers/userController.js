const userModel = require("../models/userModel")

module.exports.createUser = async (req, res) => {
    try {
        let name = req.body.name
        let userName = req.body.userName
        let dataToBeCreated = {
            name: name,
            userName: userName,
            topics: []
        }
        if (!userName) return res.status(400).send("Enter User Name")
        let checkUserName = await userModel.findOne({ userName: userName })
        if (checkUserName) return res.status(400).send(`"${userName}" is already have an account, please Login`)
        await userModel.create(dataToBeCreated)
        res.status(201).send("Account Created Successfully. Please Login")
    }
    catch (err) {
        res.status(500).send(err)
    }
}


module.exports.userLogin = async (req, res) => {
    try {
        let userName = req.body.userName
        if (!userName) return res.status(400).send("Enter User Name")
        let dbCall = await userModel.findOne({ userName: userName })
        if (!dbCall) return res.status(400).send("Invalid userName, if not having account please sign-in first")
        res.status(200).send({ userName: dbCall.userName })
    }
    catch (err) {
        res.status(500).send(err)
    }
}