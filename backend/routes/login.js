const express = require('express');
const router = express.Router();
const Users = require('../models/users.model');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/login", async function (req, res) {
    const user = await Users.find({email:req.body.email})
    if (user.length == 0) {
        return res.status(400).send("Email no existe");
    }
  
    const validPass = await bcrypt.compare(
        req.body.password,
        user[0].password
    )

    if (!validPass) {
        return res.status(400).send("Contraseña incorrecta");
    }
    // const token = jwt.sign({ email: user[0].email }, process.env.TOKEN_SECRET);
    console.log(validPass, "entered the call", user)
    res.json(user);
})

router.post("/registro", async function (req, res) {
    const salt = await bcrypt.genSalt(10);;
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    let user = {
      name: req.body.name,
      password: hashedPassword,
      client: 0,
      country: req.body.country,
      bio: '',
      email: req.body.email,
      hobbies: [],
      img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw3EfHFxvvaUOMT8v7GQasjK0VT0-KYF38GQ&usqp=CAU'
    };
    console.log(user)
    const newUser = new Users(user);
    let var1 = await newUser.save(user);
    console.log(var1)
})

router.get('/:email', (req, res) => {

    Users.find({email:req.params.email})
    .then((data) => {
        console.log('User: ', data, req.params);
        res.json(data);
    }).catch((error) => {
        console.log('error: Something broke', error);
    });
});

router.post('/update/:email', async (req, res) => {
    let user = await Users.find({ email: req.params.email });
    user = user[0];
    console.log("Past user: ", user);
    user.bio = req.body.bio;
    user.hobbies = req.body.hobbies;
    user.country = req.body.country;
    user.img_url = req.body.img_url;
    console.log("New user: ", user);
    const response = await user.save();
    console.log("response: ", response);
  });

module.exports = router;