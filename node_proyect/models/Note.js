const {model, Schema}= require('mongoose'); // esto significa que importamos Model y Schema de Mongoose. 


// Definiendo esquemas con Mongoose:

const noteSchema= new Schema({
    content: String,
    date: Date,
    important: Boolean
});

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id= returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

// Definiendo el Modelo:
// Si no importáramos model, tendríamos que escribir: mongoose.model

const Note= model('Note', noteSchema); // El modelo 'Note' no solo sirve para instanciar y guardar datos, tmb sirve para busacrlos. 

module.exports= Note 






// Creando una instancia del modelo:

/*
const note= new Note({
    content: 'Mongo db es increible',
    date: new Date(),
    important: true
});

note.save()
    .then(result => {
        console.log(result)
        mongoose.connection.close()
    })
    .catch(err => {
        console.log(err)
    })

    */