let express = require("express")
let path = require("path")
let routers = express.Router()
let Students = require(path.join(__dirname,"../models/models.js"))

routers.get("/",(req,res)=>{
    Students.find({"status":true},(err,response)=>{
        res.status(200);
        res.json(response);
    })
})

routers.get("/:id",(req,res)=>{
    Students.findById(req.params.id,(err,response)=>{
        res.status(200);
        res.json(response);
    })
})

routers.post("/",(req,res)=>{
    console.log(req.body)
    let newStud = new Students({
        name:req.body.name,
        age:req.body.age
    })

    newStud.save((err,response)=>{
        res.status(200);
        res.json({message: "success"});
    })

})

routers.post("/update/:id",(req,res)=>{    
    Students.findByIdAndUpdate(req.params.id,req.body,((err,response)=>{
        res.status(200);
        res.json({message: "Update"});
    }))
})

routers.post("/delete/:id",(req,res)=>{
    // Students.findByIdAndRemove(req.params.id,((err,response)=>{
    //     res.status(200);
    //     res.json({message: "Delete"});
    // }))
    Students.findByIdAndUpdate(req.params.id,{"status":false},((err,response)=>{
        res.status(200);
        res.json({message: "Update"});
    }))
})
module.exports = routers;