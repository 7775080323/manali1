const { user1model }= require('./user1.model');

const express = require('express');
const router = express.Router();
const createUser =(req,res,next)=>{

    const user1 = new user1model({

        firstname: req.body.firstname,
        lastname: req.body.lastname
    });

    user1.save().then(result=>{
        res.status(201).json({
            message:"User Created"
        });
    }).catch(err=>{
            res.status(500).json({
                message:"Something went wrong"
        });
    });
}

const getUser1 =(req,res,next)=>{
    user1model.find().then(result=>{
        res.status(200).json(result);
    }).catch(err=>{
        res.status(404).json({
            message:"User Not Found"
        });
    })

}

const UpdateUser =(req,res,next)=>{
    user1model.findByIdAndUpdate(req.params.userId, {
        firstName: req.body.firstName,
      }).then((result) => {
        res.status(202).json({
          message: "User Updated",
        });
      });
    

}


const deleteUser = async(req,res,next)=>{
    try {
        const result = await user1model.findByIdAndDelete(req.params.userId);
        res.status(200).json({
          message: "User Deleted",
        });
      } catch (error) {
        res.status(500).json({
          message: "Internal server error",
        });
      }
    
    
}


const getUserById =(req,res,next)=>{
    
}

module.exports={
    createUser,getUser1,getUserById,deleteUser,UpdateUser
}