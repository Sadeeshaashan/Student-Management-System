const router = require("express").Router();
let Student = require("../models/Student");
const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');



app.use(cors());
app.use(express.json())


http://localhost:8070/student/add

router.route("/add").post((req,res)=>{

    //body of method
    const name=req.body.name;
    const age=Number(req.body.age);
    const gender=req.body.gender;

    const newStudent=new Student({
        name,age,gender


    })

    newStudent.save().then(()=>{
        res.json("Student Added")//display msg in frontend as json format
    }).catch((err)=>{
        console.log(err);//exception handeling
    })

//js promise
});

http://localhost:8070/student

router.route("/").get((req,res)=>{
    Student.find().then((student)=>{
        res.json(student)                     
    }).catch((err)=>{
        console.log(err);
    })
})

//mongoDB automatically create id as primary key
//update 


http://localhost:8070/student/update/id123

router.route("/update/:id").put(async(req,res)=>{
    let userId=req.params.id;//parameter eke id value gannwa
    //const name=req.body.name;
    //const age=Number(req.body.age);
    //const gender=req.body.gender;

    //destructure
    const {name,age,gender}=req.body;

    const updateStudent={
        name,
        age,
        gender

    }

    const update=await Student.findByIdAndUpdate(userId,updateStudent).then(()=>{
        res.status(200).send({status:"user updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with updating data"});
    })



})//put-update data

//delete operation

router.route("/delete/:id").delete(async(req,res)=>{

    let userId=req.params.id;
    await Student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({
            status:"user deleted"});

    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error withdelete user",error:err.message});

    })
})

//fetch data of one user
router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
    await Student.findById(userId).then(()=>{
        res.status(200).send({status:"Use fetched",user:user})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error:err.message});
    })
})

router.route("/register").post( async(req, res) => {

    console.log(req.body)
    
	try {
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})


router.route("/login").post( async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (user) {
	
        return res.json({ status: 'ok', user: true })

	} else {
		
        return res.json({ status: 'error', user: false })
	}
})
































module.exports=router;


