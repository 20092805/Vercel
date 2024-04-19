const { Router } = require('express');

const user = Router();
const {
    searchUser,
    createUser,
    postLogin,  
    getData,
    deleteUser,
    updateUser
} = require('../controls/Users');

user.get('/searchUser', searchUser)
user.get('/getUsers/:page', getData);
user.post('/postLogin', postLogin);
user.post('/createUser', createUser);
user.delete('/deleteUser/:id', deleteUser);
user.put('/updateUser/:_id', updateUser);

module.exports = user;