const express = require("express")

const app = express();

require("dotenv").config();

const connectionDB = require("./Config/DB")

const {getAllUsers,createUser,delteSingleUser} = require("./Controllers/userAccount_Controller")


app.use(express.json())


app.route("/users").get(getAllUsers).post(createUser);
app.route("/users/:id").delete(delteSingleUser).put();




app.listen(process.env.PORT,()=>{
    console.log(`SERVER IS RUNNING ON THE PORT ${process.env.PORT}`)
    connectionDB()
})