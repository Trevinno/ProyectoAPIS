const express = require('express');
const router = express.Router();
const Postit = require('../models/postits.model');

const idFilter = req => list => list._id === parseInt(req.params.id);

// Routes
router.get('/', (req, res) => {
    Postit.find({ })
        .then((data) => {
            console.log('PostIts: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: Something broke');
        });
});

router.post('/save', (req, res) => {
    console.log('Testing out')
    const data = req.body;
    console.log(data)
    const newPostit = new Postit(data);

    newPostit.save((error) => {
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


router.get('/:email', (req, res) => {
    Postit.find({"email": req.params.email})
    .then((data) => {
        console.log('User: ', data);
        res.json(data);
    }).catch((error) => {
        console.log('error: Something broke');
    });
});

router.post('/update/:id', (req, res) => {
    Postit.findById(req.params.id)
        .then(el => {
            el.size = req.body.size
            el.title = req.body.title
            el.text = req.body.text
            el.type = req.body.type
            el.img_url = req.body.img_url
            el.save()
                .then(() => res.json('The update was made'))
                .catch(err => res.status(400).json('Error: '+ err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
  });

  router.post('/delete/:id', (req, res) => {
    Postit.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
module.exports = router;