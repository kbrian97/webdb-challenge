exports.up = function(knex, Promise) {
    return knex.schema.createTable('project' , table =>{
        table.increments();
        table.string('Name').notNullable().unique();
        //description
        table.string('Description').notNullable();
        //flag
        table.string('Completed').defaultTo(false);
    })
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
};