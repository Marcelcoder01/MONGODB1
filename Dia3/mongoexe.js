let mongoose = require("mongoose");
let {Marks, Teachers} = require("./Mongo3teachers");

//----TEACHERS

let teacher1 = {
    teacher_first_name: "Odalis",
    teacher_last_name: "Barroso"
};

let teacher2 = {
    teacher_first_name: "Javier",
    teacher_last_name: "Legra"
};

let teacher3 = {
    teacher_first_name: "Eduardo",
    teacher_last_name: "Lopez"
};

let teacher4 = {
    teacher_first_name: "Alexis",
    teacher_last_name: "Perez"
};

let teacher5 = {
    teacher_first_name: "Marco",
    teacher_last_name: "Martinez"};

//----MARKS

let mark_1 = {
    date: "2021-10-15",
    mark: 10,
    student_first_name: "Marcel",
    student_last_name: "Soto",
    group_name: "Primarios",
    subject_name: "Historia",
    teachers: [teacher1, teacher2]
};

let mark_2 = {
    date: "2021-12-25",
    mark: 10,
    student_first_name: "Sofia",
    student_last_name: "Garcia",
    group_name: "Secundarios",
    subject_name: "Biologia",
    teachers: [teacher2, teacher3]
};

let mark_3 = {
    date: "2022-03-07",
    mark: 6,
    student_first_name: "Juan",
    student_last_name: "Rodriguez",
    group_name: "Terciarios",
    subject_name: "Musica",
    teachers: [teacher1, teacher5, teacher3]
};

let mark_4 = {
    date: "2022-06-18",
    mark: 4,
    student_first_name: "Santiago",
    student_last_name: "Martinez",
    group_name: "Cuartos",
    subject_name: "Economia",
    teachers: [teacher2, teacher5, teacher1]
};

let mark_5 = {
    date: "2022-08-29",
    mark: 5,
    student_first_name: "Valentina",
    student_last_name: "Gonzalez",
    group_name: "Quintuples",
    subject_name: "Fisica",
    teachers: [teacher2, teacher3]
};

let mark_6 = {
    date: "2022-11-11",
    mark: 9,
    student_first_name: "Mateo",
    student_last_name: "Hernandez",
    group_name: "Sextos",
    subject_name: "Programacion",
    teachers: [teacher4, teacher5]
};

let mark_7 = {
    date: "2023-01-22",
    mark: 10,
    student_first_name: "Harry",
    student_last_name: "Potter",
    group_name: "Septimos",
    subject_name: "Quimica",
    teachers: [teacher2, teacher1, teacher4]
};

let mark_8 = {
    date: "2023-04-04",
    mark: 4,
    student_first_name: "Luke",
    student_last_name: "Skywalker",
    group_name: "Octavos",
    subject_name: "Musica",
    teachers: [teacher1, teacher2, teacher3]
};

let mark_9 = {
    date: "2023-07-05",
    mark: 3,
    student_first_name: "Darth",
    student_last_name: "Vader",
    group_name: "Novenos",
    subject_name: "Musica",
    teachers: [teacher5, teacher4, teacher1]
};

let mark_10 = {
    date: "2023-09-16",
    mark: 8,
    student_first_name: "Frodo",
    student_last_name: "Bolson",
    group_name: "Decimos",
    subject_name: "Estetica",
    teachers: [teacher5, teacher1]
};



//----------SUBIR A MONGO DB


// Teachers.insertMany([teacher1, teacher2, teacher3, teacher4, teacher5])
//     .then(function (resp) {
//       console.log("Profes correctamente");
//       console.log(resp);
//     })
//     .catch(function (err) {
//       console.error("Error al añadir los profes" + err);
//     });

    // Marks.insertMany([mark_1, mark_2, mark_3, mark_4, mark_5, mark_6, mark_7, mark_8, mark_9, mark_10])
    // .then(function (resp) {
    //   console.log("Notas añadidas correctamente");
    //   console.log(resp);
    // })
    // .catch(function (err) {
    //   console.error("Error al añadir las notas" + err);
    // });

//----AGREGACIONES


// Marks.aggregate(
//     [{$match: {subject_name: "Musica"}},{$group: {"_id": null, "Media de Música": {"$avg": "$mark"}}}]
//                )
//     .then(function (resp) {
//         console.log("La nota media de la asignatura es la siguiente: ");
//         console.log(resp);
//       })
//       .catch(function (err) {
//         console.error("Error en el cálculo de la media" + err);
//       });

// Marks.aggregate(
    // [{$count: "Número de alumnos"}]
    //         )
    // .then(function (resp) {
    //     console.log("El número total de alumnos es de : ");
    //     console.log(resp);
    //     })
    // .catch(function (err) {
    //     console.error("Error en el cálculo" + err);
    //     });

// Marks.aggregate(
//     [{$project: {student_first_name: 1, student_last_name: 1, _id: 0}}]
//              )
//     .then(function (resp) {
//         console.log("Nombre y apellidos de los estudiantes: ");
//         console.log(resp);
//         })
//     .catch(function (err) {
//         console.error("Ha habido un error" + err);
//         });

Marks.aggregate([{$unwind: "$teachers"},
    {$project: {Nombre_profes: "$teachers.teacher_first_name", Apellidos_profes: "$teachers.teacher_last_name", _id: 0,}}]
             )
    .then(function (resp) {
        console.log("Nombre y apellidos de los profes: ");
        console.log(resp);
        })
    .catch(function (err) {
        console.error("Ha habido un error" + err);
        });

// Marks.aggregate(
//     [{$group: {_id: "$group_name", total: {$sum: 1}}},{$sort: {_id: -1}}]
//             )
//     .then(function (resp) {
//         console.log("Alumnos ordenador por grupo: ");
//         console.log(resp);
//                 })
//     .catch(function (err) {
//         console.error("Ha habido un error" + err);
//                 });

// Marks.aggregate(
//     [{$group: {_id: "$subject_name", top5: {$avg: "$mark"}}}, {$match: {top5: {$gt: 5}}},
//     {$sort: {top5: 1}}]
// )
//     .then(function (resp) {
//         console.log("top 5 nota media: ");
//         console.log(resp);
//                 })
//     .catch(function (err) {
//     console.error("Ha habido un error" + err);
//                 });

// Marks.aggregate([{$unwind: "$teachers"}, {$group: {_id:"$subject_name", numProf: {$sum: 1}}}])
//     .then(function (resp) {
//         console.log("Total profes por asignatura: ");
//         console.log(resp);
//                  })
//     .catch(function (err) {
//         console.error("Ha habido un error" + err);
//                 });

mongoose.connect('mongodb+srv://marcelcoder01:Lahabana324b6@ejemplo.bm1akvz.mongodb.net/School',
{useNewUrlParser: false, useUnifiedTopology: false,})