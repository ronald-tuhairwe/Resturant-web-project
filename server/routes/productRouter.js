const express = require('express');
const productController = require('../controllers/productController-async');


const router = express.Router();


router.get('/', productController.getAll);

router.post('/', productController.save);

router.delete('/:id', productController.deleteById);


module.exports = router;