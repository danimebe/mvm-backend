const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

getUsers = async () => {
    const users = await readFile(path.join(__dirname, '..', 'db', 'users.json'));
    const usersJson = JSON.parse(users.toString().trim());
    return usersJson;
}

addUser = async (user) => {
    const users = await getUsers();
    users.push(user);
    await writeFile(path.join(__dirname, '..', 'db', 'users.json'), JSON.stringify(users));
    return users;
}

updateUser = async (idx, user) => {
    const users = await getUsers();
    users[idx] = user;
    await writeFile(path.join(__dirname, '..', 'db', 'users.json'), JSON.stringify(users));
    return users;
}

deleteUser = async (idx) => {
    let users = await getUsers();
    if (idx > users.length) {
        throw new Error('Error - Indice no encontrado');
    }
    users = users.filter((user, i) => i !== idx);
    await writeFile(path.join(__dirname, '..', 'db', 'users.json'), JSON.stringify(users));
    return users;
}



module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
}