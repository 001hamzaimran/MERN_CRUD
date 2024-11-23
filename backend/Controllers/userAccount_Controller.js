const userAccount = require("../Models/useraccount");


// METHOD       GET
// API          http://localhost:5000/users
//@desc         sare users ko fetch krke lekr ayga 

const { default: mongoose } = require("mongoose");


const getAllUsers = (req,res)=>{
    return res.send("all Users")
}


// METHOD       POST
// API          http://localhost:5000/users
//@desc         user create krega 


const createUser = async(req,res)=>{
try{
    const {name , email , password}  = req.body;

    
    
    const newUser = await userAccount.create({
        name,
        email,
        password
    })
    
    
    
    if(newUser){
        return res.status(201).send( { data: newUser , message:"data added successfully !!"  })
    }
    
}catch(error){
    console.log(error)
}




}


// METHOD       DELETE
// API          http://localhost:5000/users/:id
//@desc         single user delte krega  


const delteSingleUser = async(req,res) =>{
    try{

        const {id} = req.params;
        
        
        const deleteUser =  await userAccount.findByIdAndDelete({"_id":id})
    
        if(deleteUser) return res.status(200).send({data:deleteUser, message:`user ${id} is deleted `})
    
    }catch(error){
        console.log(error)
    }




}



module.exports = {
    getAllUsers,
    createUser,
    delteSingleUser
}