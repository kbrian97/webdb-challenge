exports.seed = function(knex, Promise) {


    return knex('action').del()
        .then(function () {

        return knex('action').insert([
            {actionDescription: "Pick new book", actionNotes: "Something about tech", completed: False, projectId: 1},
            {actionDescription: "Workouts", actionNotes: "weight-training, cardio, yoga", completed: False, projectId: 2},
            {actionDescription: "Get gym bag ready", actionNotes: "wash gear and pack headphones", completed: True, projectId: 2},
            {actionDescription: "Grab case of Smart water's", actionNotes: "15 pack from sam's", completed: True, projectId: 3},
            {actionDescription: "Morning Vits", actionNotes: "take vitamens with full glass of water right out of bed", completed: True, projectId: 4},
        ]);
    });
};