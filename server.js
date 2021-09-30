const express = require("express");

const app = express();
const arr = [
    {
        name: "Sarah",
        age: 20
    }, {
        name: "Omar",
        age: 20
    }
];
app.get("/", (req, res) => {
    res.send("First Try");
});
app.get("/users", (req, res) => {
    res.json(arr);
})

app.get("/search", (req, res) => {
    const {name, age} = req.query;
    let filterdArray = arr;

    if (name) {
        filterdArray = arr.filter(user => user.name.includes(name))
    }
    if (color) {
        filterdArray = arr.filter(user => user.age = age)
    }

    if (filterdArray.length === 0) {
        res.status(204).send('No Content -> Empty Array')
    } else if (filterdArray.length != 0) {
        res.status(200).json(filterdArray)
    }
})
app.listen(3000, console.log("it's Worked"));
