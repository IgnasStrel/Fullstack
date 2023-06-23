const Transactions = require('../models/Transaction');
const asyncHandler = require('express-async-handler');

// @desc Create new transactions
// @route POST /api/transactions
// @access PRIVAT

const setTransaction = asyncHandler( async(req, res)=>{
    if(!req.body.text || !req.body.amount){
        res.status(400)
        throw new Error('Please add a text and amount');
    }
    const transaction = await Transactions.create({
        text: req.body.text,
        amount: req.body.amount,
        user: req.body.user
    });
    res.status(200).send(transaction);
});

module.exports = {
    setTransaction,
    
}
