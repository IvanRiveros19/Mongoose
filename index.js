require('./connection');

const product = require('./models/product');

const myProduct = new product({
    nombre: 'Laptop',
    descripcion: 'Acer Aspire ES',
    precio: 3899.99
});

myProduct.save((err, document) => {
    if (err) {
        console.log(err);
    }
    console.log('Guardado:', document);
});