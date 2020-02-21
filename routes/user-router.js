const router = require('express').Router();
const restricted  = require('../middleware/jwot.js')
const Users = require('../models/user-model.js')
router.get('/', restricted, (req,res) => {
    Users.get()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: `Users not found.`})
        })
})

module.exports = router; 