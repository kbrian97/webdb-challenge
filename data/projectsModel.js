const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

 function get(id){
    if(id){
        return db('project').where('Id', id)
            .then(project => {
                return project[0]
            })
    }

     return db('project')
        .then(projects => {
            return projects
        })
}

 function add(project){
    return db('project').insert(project)
        .then( ([id]) => this.get(id) )
}

 module.exports = {
    get, add,
};