const mongoose= require('mongoose');

// Fijarse bien que las comillas son estas: `` y NO estas '' . 

const conectionString= process.env.MONGO_DB_URI

mongoose.connect(conectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(()=>{
        console.log('Database Conected')
    })
    .catch(err => {
        console.log(err)
    });


    /*
    Para investigar:
    Optimización de índices ==> useCreateIndex (se paga mucha plata). 
    

    */