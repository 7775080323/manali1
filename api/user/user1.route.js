const express = require('express');
const {getUser1 ,createUser,UpdateUser,deleteUser,getUserById }= require('./user1.controller');
const router=express.Router();

router.get('/',getUser1);

router.post('/',createUser);

router.put('/:userId',UpdateUser );

router.delete('/:userId',deleteUser);

router.get('/:userId',getUserById);

module.exports=router



