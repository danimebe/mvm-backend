const router = require('express').Router();
const { success, error } = require('../../network/response');
const { addUser, getUsers, updateUser, deleteUser } = require('./controller');

router.get('/', async (req, res) => {
    try {
        const users = await getUsers();

        success(req, res, users, 200);

    } catch (err) {
        error(req, res, 'Error al obtener usuarios', 500, err);
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, lastname, email, phone } = req.body;

        await addUser(name, lastname, email, phone);
        success(req, res, 'Datos guardados satisfactoriamente', 200);

    } catch (err) {
        error(req, res, 'Error al guardar usuario', 500, err);
    }
});

router.put('/', async (req, res) => {
    try {
        const { idx, name, lastname, email, phone } = req.body;

        await updateUser(idx, name, lastname, email, phone);
        success(req, res, 'Datos actualizados satisfactoriamente', 200);

    } catch (err) {
        error(req, res, 'Error al actualizar usuario', 500, err);
    }
});

router.delete('/', async (req, res) => {
    try {
        const { idx } = req.body;

        await deleteUser(idx);
        success(req, res, 'Usuario eliminado satisfactoriamente', 200);
    } catch (err) {
        error(req, res, 'Error al eliminar usuario', 500, err);
    }

})


module.exports = router;