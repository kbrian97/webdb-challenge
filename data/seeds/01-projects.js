exports.seed = function(knex, Promise) {


    return knex('project').del()
        .then(function () {

        return knex('project').insert([
            {projectName: "Read", projectDescription: "Read at-least one chapter a day", completed: False},
            {projectName: "Workout", projectDescription: "Go to the gym at least 3 times a week", completed: False},
            {projectName: "Drink Water", projectDescription: "Drink at-least 1.5 liters of water daily", completed: True},
            {projectName: "Take Vitamens", projectDescription: "Take Biotin, B12, and Organic Multivitamin daily", completed: False},
        ]);
    });
};