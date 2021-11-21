let express = require("express")
let path = require("path")
let app = express()

//####################################################################
let bodyParser = require("body-parser")
let multer = require("multer")
let upload = multer();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(upload.array())

//####################################################################
let router = require("./routers/router.js")
app.use("/",router)


app.listen(3001);