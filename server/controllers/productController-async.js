const Product = require('../models/product');
const {ObjectId} = require('mongodb');
const product = require('../models/product');

exports.getAll = async (req, res, next) => {
    if(req.query.price) {
        res.json(await Product.filterByPrice(req.query.price));
    } else {
        res.json(await Product.find());
    }
    
};

exports.save = async (req, res, next) => {
    try{
        const result = await new Product(req.body).save(); //instance methods
        res.json(result);
    } catch(error) {
       next(error);
    } 
}

exports.deleteById = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({_id: req.params.id});
}