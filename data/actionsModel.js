const knex = require('knex');
const dbConfig = require('../knex');
const db = knex(dbConfig.development);

function get(id){
    if(id){
        return db('action').where('Id', id).then(action => { return action[0] })
    }

    return db('action').then(actions => { return actions })
}

function add(action){
    return db('action').insert(action).then( ([id]) => this.get(id) )
}

function getActions(id){
    return db('action').where('Project_Id', id).then(actions => {

        const mapped = actions.map( x => {

                let newObj = {
                    id: x.id,
                    description: x.action_description,
                    notes: x.action_notes,
                    completed: x.completed
                }
                return newObj
            })
            return mapped
        })
}

module.exports = {
    get, add, getActions
}; 