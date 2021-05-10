const express = require('express');
const router = express.Router();
const User = require('../models/users.model');

const idFilter = req => list => list._id === parseInt(req.params.id);

// Routes
router.get('/', (req, res) => {
    User.find({ })
        .then((data) => {
            console.log('Users: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: Something broke');
        });
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newUser = new User(data);

    newUser.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'There is a leaking pipe :(' });
            console.log(error);
            return;
        }
        // BlogPost
        return res.json({
            msg: 'Your data has been saved!!!'
        });
    });
});


router.get('/:theme', (req, res) => {
    User.find({"theme": req.params.theme})
    .then((data) => {
        console.log('Users: ', data);
        res.json(data);
    }).catch((error) => {
        console.log('error: Something broke');
    });
});

router.post('/update/:id', (req, res) => {
    User.findById(req.params.id)
        .then(el => {
            el.name = req.body.name
            el.password = req.body.password
            el.client = req.body.client
            el.country = req.body.country
            el.bio = req.body.bio
            el.email = req.body.email
            el.hobbies = req.body.hobbies
            el.img_url = req.body.img_url
            el.save()
                .then(() => res.json('The update was made'))
                .catch(err => res.status(400).json('Error: '+ err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
  });

  router.post('/delete/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
module.exports = router;