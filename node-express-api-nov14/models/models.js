let mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// connect mongoose database use promisis for that
mongoose.connect('mongodb://localhost:27017/my_first_db',{  useNewUrlParser: true,  useUnifiedTopology: true})
.then(()=>{console.log("connection success!!!")})
.catch((err)=>{console.log("err!!!",err)})


let studentScemas = Schema({
    id : ObjectId,
    name : {type:String},
    age : {type:Number},
    status :{type:Boolean,default:true}
});

let Students = mongoose.model("students",studentScemas)

module.exports = Students;