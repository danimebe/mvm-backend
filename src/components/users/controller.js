const { add, list, update, remove } = require('./store');

const addUser = async (name, lastname, email, phone) => {
    if (!name || !lastname || !email || !phone) {
        throw new Error('Los campos envíados son incorrectos');
    }

    const user = {
        name,
        lastname,
        email,
        phone
    }

    return await add(user);

}

const updateUser = async (idx, name, lastname, email, phone) => {

    if (!idx && idx !== 0) {
        throw new Error('Se debe envíar el índice del elemento a modificar');
    }

    if (!name || !lastname || !email || !phone) {
        throw new Error('Los campos envíados son incorrectos');
    }

    const user = {
        name,
        lastname,
        email,
        phone
    }

    return await update(idx, user);
}

const getUsers = async () => {
    return await list();
}

const deleteUser = async (idx) => {
    return await remove(idx);
}

module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
}