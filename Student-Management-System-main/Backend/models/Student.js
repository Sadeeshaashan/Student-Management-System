const mongoose=require('mongoose');

const schema=mongoose.Schema;

const studentSchema=new mongoose.Schema({

    name:{
        type:String,//data type
        required:true //backend validation
    },
    age:{
        type:Number,
        required:true
    },

    gender:{
        type:String,
        required:true
    }
})

const Student=mongoose.model("Student",studentSchema);//mongodb - students

module.exports=Student;
