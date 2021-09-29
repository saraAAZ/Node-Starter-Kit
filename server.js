const express = require("express");

const app = express();
const arr=[{

    name : "Sarah",
    age : 20,
},
{
    name : "Omar",
    age: 20,
}
];
app.get("/",  (req, res) => {
    res.send("First Try");
});
app.get("/users" , (req , res)=>{
    res.json(arr);
})

app.get("/search" , (req , res)=>{
    const {name, age}=req.query;
    const filterdArray= arr.filter(user=>{
        if(name!=undefined && age!=undefined){
           return ( user.name.includes(name)&&
            user.age==age)
        }else if(name!=undefined){
            return (user.name.includes(name)&&user.age("Age"))

        }else if(age!=undefined){
            return (user.age(age)&&user.name.includes("User Name"))

        }else if (filterdArray.length==0){
            return (res.statusCode)
        }
    })
    res.json(filterdArray);
})
app.listen(3000,console.log("it's Worked"));