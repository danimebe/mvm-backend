const { getUsers, addUser, updateUser, deleteUser } = require("../../utils/users");

const saveUser = async (user) => {
    const users = await addUser(user);
    return users;
}

const listUsers = async () => {
    const users = await getUsers();
    return users;
}

const updateUsers = async (idx, user) => {
    const users = await updateUser(idx, user);
    return users;
}

const removeUser = async (idx) => {
    const users = await deleteUser(idx);
    return users;
}


module.exports = {
    add: saveUser,
    list: listUsers,
    update: updateUsers,
    remove: deleteUser
}