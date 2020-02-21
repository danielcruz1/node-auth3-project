const db = require('../data/dbconfig.js')

module.exports = {
    get,
    filtering,
    findById,
    insert
}

function get(){
    return db('users')
}

function findById(id){
    return db('users').where({ id }).first()
}

function filtering(login) {
    return db('users').where(login).first()
}

async function insert(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
  } 