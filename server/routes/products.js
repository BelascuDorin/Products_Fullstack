const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const User = require('../models/User');
const Product = require('../models/Product');

const { check, validationResult } = require('express-validator');

// @route    GET api/products
// @desc     Get all users products
// @access   Private
router.get('/', auth, async (req, res) => {
    try{
        const products = await Product.find({ user: req.user.id }).sort({ date: -1});
        res.json(products);
    }catch{
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    POST api/contacts
// @desc     Add a contact
// @access   Private
router.post(
    '/', 
    [ 
        auth, 
        [
            check('price', 'Please enter price').not().isEmpty(),
        ]
    ], 
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const {name, description, price} = req.body;

        try{
            const newProduct = new Product({
                user: req.user.id,
                name: name,
                description: description,
                price: price
            });

            const product = await newProduct.save();

            res.json(product);
        }catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;