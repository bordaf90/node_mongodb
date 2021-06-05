//import express from 'express';

require('dotenv').config();
require('./mongo');

const express= require('express');
const app= express();
const cors= require('cors');
const Note= require('./models/Note');

app.use(cors());
app.use(express.json()); // esto sirve para los post


 
notes=[]

app.get('/', (request, response) => {
    response.send('<h1>Hello world</h1>')
});

app.get('/api/notes', (request,response) => {
    Note.find({}).then(notes => {
        response.json(notes)
    })
});


app.get('/api/notes/:id', (request, response) => {
    const id= Number(request.params.id)
    const note= notes.find(note => note.id == id)

    if (note){
        response.json(note)
    } else {
        response.status(404).end() // puede ser 404, etc...
    }
});

app.delete('/api/notes/:id', (request, response) => {
    const id= Number(request.params.id)
    notes= notes.filter(note => note.id ==! id)
    response.status(204).end()
});

app.post('/api/notes', (request,response) =>{
    const note= request.body 

    if(!note || !note.content){ // "si no tiene note o no tiene note.content"
        return response.status(400).json({
            error: 'note.content is missing'
        })
    } 

   const newNote= new Note({
       content: note.content,
       date: new Date(),
       important: note.important || false
   })

   newNote.save().then(savedNote => {
       response.json(savedNote)
   })


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


}); 

module.exports= {app}


/*

¿Qué falta saber?

Validaciones.
Manejo de errores.


*/