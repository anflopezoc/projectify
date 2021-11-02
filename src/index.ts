import express from 'express';
import { PORT } from './config/config';

//initializations
const app = express();

//Settings
app.set('port', PORT)
//Middlewares

//Routes

//Static files


//Starting the server
app.listen( app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);  
})

