require('../connection');

const Product = require('../models/Product');

const someFunction = async () => {

    const laptop = new Product({
        nombre: 'Laptop Acer',
        descripcion: 'Acer Asprire',
        precio: 9999.99
    });
    await laptop.save();

    const products = await Product.find({nombre: 'Laptop Acer'});
    console.log(products)

};

someFunction();