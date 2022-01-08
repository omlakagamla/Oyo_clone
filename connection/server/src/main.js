const express = require("express");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());


const { addUser, selectuser } = require('./user');

app.get('/userlist', async (req, res) => {
    //res.json("kuch bhi");
    const list = await selectuser();
    res.json(list);
});

app.post("/newUser", async (req, res) => {
    const user = req.body;
    console.log(user);
    await addUser(user)
});

app.listen(4000, () => console.log('server started'));