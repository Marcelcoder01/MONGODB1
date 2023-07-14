let mongoose = require("mongoose")

let User = require("./Mongo1User");
let Profile = require("./Mongo1Profile")
let Credentials = require("./Mongo1.Credentials")

mongoose.connect('mongodb+srv://marcelcoder01:Lahabana324b6@ejemplo.bm1akvz.mongodb.net/Codenotch',
{useNewUrlParser: false, useUnifiedTopology: false,})

let userDocument = new User({
    login: "Marcel1",
    password: "Lahabana324b6",

});

let profileDocument = new Profile({
    name: "Marcel",
    surname: "Soto",
    dateOfbirth: "20 de Agosto 1992",
    Comments: "Soltero",
    rol: "Programador",
});

let credentialsDocument = new Credentials({
    adress: "Luis Morote 17",
    phone: 677281300,
    email: "marcel@codenotch.com",
})



userDocument.save()
  .then(() => {
    console.log("Documento guardado");
  })
  .catch((error) => {
    console.error("Error al guardar el documento users:", error);
  });

profileDocument.save()
  .then(() => {
    console.log("Documento profile guardado");
  })
  .catch((error) => {
    console.error("Error al guardar el documento profile:", error);
  });

credentialsDocument.save()
  .then(() => {
    console.log("Documento credentials guardado");
  })
  .catch((error) => {
    console.error("Error al guardar el documento credentials:", error);
  });


// function checkRespuesta(err, res){
//     if(err)
//         console.log("Error " + err)
//     else
//     {
//         console.log("Documento guardado")
//         console.log(res)
//         // mongoose.disconnect()
//     }
// }

// userDocument.save(checkRespuesta);
// profileDocument.save(checkRespuesta);
// credentialsDocument.save(checkRespuesta);
