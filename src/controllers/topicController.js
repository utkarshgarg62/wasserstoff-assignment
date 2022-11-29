const topicModel = require("../models/topicModel")

module.exports.addTopic = async (req, res) => {
    try {
        let userName = req.params.userName
        let title = req.body.title
        let details = req.body.details
        let dataToBeCreated = {
            title: title,
            details: details
        }
        let dbCall = await topicModel.findOne({ userName: userName })
        let topicList = dbCall.topics
        topicList.push(dataToBeCreated)
        let updatedData = await topicModel.findOneAndUpdate({ userName: userName },
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
        let response = await topicModel.findOne({ userName: userName }).select({ id: 1, userName: 1, topics: 1 })
        if (!response) return res.status(404).send(`${userName} - Data Not Found`)
        res.status(200).send(response)
    }
    catch (err) {
        res.status(500).send(err)
    }
}
