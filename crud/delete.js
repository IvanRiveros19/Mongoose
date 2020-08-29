require('../connection');

const Product = require('../models/Product');

const someFunction = async () => {
    //Busca todas las coincidencias y elimina solo 1
    // const deletedProduct = await Product.deleteOne({name: 'Laptop Acer'});
    //Elimina todas las coincidencias
    const result = await Product.deleteMany({name: 'Laptop Acer'});
    //Solo busca una coincidencia y la elimina
    // const result = await Product.findOneAndDeletmousee({name: 'Laptop Acer'});
    //Elimina utilizando id
    //const result = await Product.findByIdAndDelete('5e290e03a1def223dc11c70d');

    console.log(result);

};

someFunction();