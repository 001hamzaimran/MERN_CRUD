const mongoose = require("mongoose");



const userAccount_schema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"enter Your name first"]
    },
    email:{
        type:String,
        required:[true,"enter Your valid email "]
    },
    password:{
        type:String,
        required:[true,"enter Your strong password "]
    },
})




const userAccount = mongoose.model("userAccount",userAccount_schema);

module.exports = userAccount;