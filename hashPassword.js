const bcrypt = require('bcryptjs');

const password = 'password123'; // Replace with your desired password

bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;
    console.log('Hashed password:', hash);
});
