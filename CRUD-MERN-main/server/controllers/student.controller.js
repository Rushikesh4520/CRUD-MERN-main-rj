const Student = require("../model/student.model");

exports.addStudent = async (req, res) => {
   let student = new Student(req.body);
   let result = await student.save();
   res.send(result); 
}

exports.getStudent = async (req, res) => {
    const  students = await Student.find();
    if(students.length > 0){
        res.send(students);
    }else{
        res.send({result : "No Student Found"})
    }
}

exports.deleteStudent = async (req, res) => { 
    let result = await Student.deleteOne({_id : req.params.id});
    res.send(result);    
}

exports.getStudentId = async (req, res) => { 
    try{
        let result = await Student.findOne({_id : req.params.id});
        console.log(result);
        if(result){
            res.send(result);
        }else{
            res.send({"result" : "No record Found"});
        }
    }catch(err){
        res.status(404).json({mesage: "wrong Id"})      
    }
}

exports.updateStudentData = async (req, res) => { 
    let result = await Student.updateOne(
        {_id : req.params.id},
        { $set : req.body}
    );
    res.send(result);
}