const userModel = require("../models/userModel")

module.exports.addTopic = async (req, res) => {
    try {
        let userNameP = req.params.userName
        console.log(userNameP)
        if (!userNameP) return res.status(400).send("Enter userName")
        let userName = req.body.userName
        console.log(userName)
        if (userName != userNameP) return res.status(400).send("Unauthorize")
        let title = req.body.title
        let details = req.body.details
        if (!title) return res.status(400).send("Enter title")
        if (!details) return res.status(400).send("Enter details")
        let dataToBeCreated = {
            title: title,
            details: details
        }
        let dbCall = await userModel.findOne({ userName: userNameP })
        console.log(dbCall)
        if (!dbCall) return res.status(404).send("User not Found")
        let topicList = dbCall.topics
        topicList.push(dataToBeCreated)
        let updatedData = await userModel.findOneAndUpdate({ userName: userNameP },
            { topics: topicList },
            { new: true }
        )
        res.status(201).send("Topic Added")

    }
    catch (err) {
        res.status(500).send(err)
    }
}



module.exports.getTopic = async (req, res) => {
    try {
        let userName = req.params.userName
        if (!userName) return res.status(400).send("Enter User Name")
        let response = await userModel.findOne({ userName: userName }).select({ id: 1, name: 1, userName: 1, topics: 1 })
        if (!response) return res.status(404).send(`${userName} - Data Not Found`)
        res.status(200).send(response)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

module.exports.userData = async (req, res) => {
    try {
        let response = await userModel.find()
        res.status(200).send(response)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

