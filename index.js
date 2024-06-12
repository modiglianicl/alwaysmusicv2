import express from 'express';
import 'dotenv/config';
import { router } from './routes/router.js';

let app = express();
let { PORT } = process.env;


// Middleware POST

app.use(express.json())


// Rutas

app.use('/',router);


// Listen

app.listen(PORT, ()=> {
    console.log(`Server UP on http://localhost:${PORT}`);
})