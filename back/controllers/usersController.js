const User = require('../models/User');

//@desc Create new user
//@route POST /api/user
//@access PUBLIC

const createNewUser = async(req, res)=> {
    if(!req.body.name || !req.body.email || !req.body.password) res.status(404).send("Uzpildykite laukus");

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const result = await user.save();
    res.status(200).send(result);

}

module.exports = createNewUser