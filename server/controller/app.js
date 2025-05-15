const Task = require('../model/task');



const createTask = async (req,res)=>{

    try {

        const {uid,title, task} =req.body;

        const data = await Task.create({uid, title, task});
     
        if(data){

            res.json({message: "New task added", data:data});
        }
        else{
            
            res.json({message: "Something went wrong!"})
        }
        
    } catch (error) {
        res.json(error)
    }
}


const findAllTasks = async (req,res)=>{

    try {


        const data = await Task.find();
     
        if(data){

            res.json({data:data});
        }
        else{
            
            res.json({message: "Something went wrong!"})
        }
        
    } catch (error) {
        res.json(error)
    }
}


const findUserTasks = async (req,res)=>{

    try {

        const id = req.params.id;

        const data = await Task.find({uid:id});
     
        if(data){

            res.json({data:data});
        }
        else{
            
            res.json({message: "Something went wrong!"})
        }
        
    } catch (error) {
        res.json(error)
    }
}




const findOneTask = async (req,res)=>{

    try {

        const id = req.params.id;

        const data = await Task.findOne({_id:id});
     
        if(data){

            res.json({data:data});
        }
        else{
            
            res.json({message: "Something went wrong!"})
        }
        
    } catch (error) {
        res.json(error)
    }
}


const updateTask = async (req,res)=>{

    try {

        const id = req.params.id;
        const {title, task} =req.body;

        const data = await Task.findOneAndUpdate({_id:id},{title: title, task:task});
     
        if(data){

            res.json({message: "Task Edited!"});
        }
        else{
            
            res.json({message: "Something went wrong!"})
        }
        
    } catch (error) {
        res.json(error)
    }
}

const deleteTask = async (req,res)=>{

    try {

        const id = req.params.id;
    

        const data = await Task.findOneAndDelete({_id:id});
     
        if(data){

            res.json({message: "Task Deleted!"});
        }
        else{
            
            res.json({message: "Something went wrong!"})
        }
        
    } catch (error) {
        res.json(error)
    }
}





module.exports = {createTask, findAllTasks ,findOneTask, findUserTasks ,updateTask, deleteTask}; 