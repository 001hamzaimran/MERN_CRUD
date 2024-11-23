const mongoose = require("mongoose");


const connectionDB = async()=>{
    const connectivity = await mongoose.connect(process.env.DB);

    if(connectivity){
        console.log("mongodb connected successfulll!!")
    }else{

        exit(1)
    }
}


module.exports = connectionDB;