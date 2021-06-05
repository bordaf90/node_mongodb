/*

//import express from 'express';

const express= require('express');
app= express();

app.use(express.json()) // esto sirve para los post

notes= [
    {
        "id":1,
        "content": "Tengo que estudiar",
        "date": "hoy",
        "important": true
    },

    {
        "id":2,
        "content": "Para aprender bien",
        "date": "hoy",
        "important": true
    },

    {
        "id":3,
        "content": "Node js",
        "date": "hoy",
        "important": true
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello world</h1>')
});

app.get('/api/notes', (request,response) => {
    response.json(notes)
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

    const ids= notes.map(note => note.id)
    const maxId= Math.max(...ids) // recorre todos los ids y encuentra el máximo id

    const newNote= { // objeto literal de la nueva nota
        id: maxId +1,
        content: note.content,
        important: typeof note.important ==! 'undefine' ? note.importante: false,
        date: new Date().toISOString()
    }

    notes= [...notes, newNote]

    response.json(newNote)
})

const PORT= 4000;
app.listen(PORT, () => {
    console.log('Server on port ', PORT);
});




/*

¿Qué falta saber?

Validaciones.
Manejo de errores.


*/

