require('../connection');

const User = require('../models/User');

const someFunction = async () => {
    const usuario1 = await User.findOne({username: 'Ivan'});
    const usuario2 = await User.findOne({username: 'Joel'});
    
    console.log(usuario1)
    console.log(usuario2)
};

someFunction();