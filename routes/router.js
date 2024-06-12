import express from 'express';
import { home, addEstudiante, allEstudiantes, queryPorRut, changeEstudiante, borrarEstudiante } from '../controllers/cruddb.js';

let router = express.Router();


router.get('/',home)

router.get('/registroestudiante',addEstudiante)

router.get('/listaestudiantes',allEstudiantes)

router.get('/chequearrut',queryPorRut)

router.get('/actualizarestudiante',changeEstudiante)

router.get('/borrarestudiante',borrarEstudiante)


export {
    router
}