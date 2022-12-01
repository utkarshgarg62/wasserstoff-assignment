const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const topicController = require("../controllers/topicController")

// ******* USER ROUTES ********************//
router.post("/createUser", userController.createUser)
router.post("/userLogin", userController.userLogin)


// ******* TOPICS ROUTES ****************//
router.post("/addTopic/:userName", topicController.addTopic)
router.get("/getTopics/:userName", topicController.getTopic)
router.get("/getTopics", topicController.userData)


module.exports = router;