require('../connection');

const User = require('../models/User');

const searchUsers = async () => {
    const usuarios = await User.find({});
    
    console.log(usuarios);
};

searchUsers();