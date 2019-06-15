exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', table => {
        table.increments();
        table.string('actionDescription');
        table.string('actionNotes');

        table.integer('Project_Id').unsigned();
        table.foreign('Project_Id').references('Id').on('project');
        table.string('Completed').defaultTo(false);


    })
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action')
};