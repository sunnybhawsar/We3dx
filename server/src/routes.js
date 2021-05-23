const AuthenticationController = require('./controllers/AuthenticationController')
const UsersController = require('./controllers/UsersController')
const QueriesController = require('./controllers/QueriesController')
const EmailController = require('./controllers/EmailController')
const FileController = require('./controllers/FileController')
const ContactController = require('./controllers/ContactController')
const HiringController = require('./controllers/HiringController')
const RequestController = require('./controllers/RequestController')
const BlogController = require('./controllers/BlogController')
const PositionController = require('./controllers/PositionController')


var path = require('path');

var express = require('express');
var router  = express.Router();

router.use(express.static(path.join(__dirname,'dist')));

//Routes Start

// router.get("/", function(req, res) {
// 	res.sendFile((path.join(__dirname,"index.html")));
// })

//Authentication

router.post("/register",
 
  AuthenticationController.register
)

router.post("/login", AuthenticationController.login)

router.post("/forgot", AuthenticationController.forgot)

router.post("/reset", AuthenticationController.reset)


//Users

router.get("/users", UsersController.index)

router.post("/users", UsersController.post)

router.get("/users/:userId", UsersController.show)

router.put("/users/:userId", UsersController.put)

router.delete("/users/:userId", UsersController.delete)

//Blogs

router.get("/blogs", BlogController.index)

router.post("/blogs", BlogController.post)

router.get("/blog/:blogId", BlogController.show)

router.put("/blog/:blogId", BlogController.put)

router.delete("/blog/:blogId", BlogController.delete)

//postions

router.get("/positions", PositionController.index)

router.post("/positions", PositionController.post)

router.get("/positions/:positionId", PositionController.show)

router.put("/positions/:positionId", PositionController.put)

router.delete("/positions/:positionId", PositionController.delete)


//Queries

router.get("/queries", QueriesController.index)

router.post("/queries", QueriesController.post)

router.get("/queries/:queryId", QueriesController.show)

router.put("/queries/:queryId", QueriesController.put)

router.delete("/queries/:queryId", QueriesController.delete)


//Contact

router.get("/contacts", ContactController.index)

router.post("/contacts", ContactController.post)

router.get("/contacts/:contactId", ContactController.show)

router.put("/contacts/:contactId", ContactController.put)

router.delete("/contacts/:contactId", ContactController.delete)


//Hiring

router.get("/hirings", HiringController.index)

router.post("/hirings", HiringController.post)

router.get("/hirings/:hiringId", HiringController.show)

router.put("/hirings/:hiringId", HiringController.put)

router.delete("/hirings/:hiringId", HiringController.delete)


//Request

router.get("/requests", RequestController.index)

router.post("/requests", RequestController.post)

router.get("/requests/:requestId", RequestController.show)

router.put("/requests/:requestId", RequestController.put)

router.delete("/requests/:requestId", RequestController.delete)



//Email Verifiaction

router.post("/send/:uId", EmailController.send)

router.get("/verify/:uId", EmailController.verify)

//File Upload

router.post("/upload/", FileController.save)




module.exports = router;