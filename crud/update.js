require('../connection');

const User = require('../models/User');

const someFunction = async () => {
    const user = await User.findOne({username: 'Ivan'});
    user.name = 'Cosmo';
    await user.save();
    console.log(user);
};

const otherFunction = async () => {
    const user = await User.findOneAndUpdate({username: 'Ivan'}, {
        name: 'Wanda'
    }, {new: true});
    console.log(user);
};

someFunction();
//otherFunction();