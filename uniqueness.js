require("./connection");

const User = require("./models/User");

async function createUsers() {
  const usuario1 = new User({
    username: "Ivan",
    password: "49324"
  });
  await usuario1.save();

  const usuario2 = new User({
    username: "Ivan",
    password: "948732"
  });
  await usuario2.save();

}

createUsers();
