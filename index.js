const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("SERVER IS UP AND RUNNING");
});

app.post('/login',(req,res)=>{
    const {email,password} = req.body;

    // if((!email || email.trim()==="") && (!password || password.trim()==="")){
    //     return res.status(400).json({message:"Both Email and Password are required"});
    // }

    if(!email || email.trim()===""){
        return res.status(400).json({message:"Email cannot be empty"});
    }

    if(!password || password.trim()===""){
        return res.status(400).json({message:"Password cannot be empty"});
    }

    return res.json({message:"Login successful",data:{email,password}});
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});