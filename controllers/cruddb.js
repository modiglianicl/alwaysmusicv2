import path from 'path';
import { registrarEstudiante, consultarEstudiantes, consultarPorRut, actualizarEstudiante, borrarPorRut } from '../model/queries.js';

let __dirname = path.resolve();

let home = (req,res) => {
    res.send("Home");
}

let addEstudiante = async (req,res) => {
    let { nombre , rut , curso , nivel} = req.query;
    let results = await registrarEstudiante(nombre,rut,curso,nivel);
    if (results === "23505") { // Si el rut ya existe...
        res.send("Ese usuario con ese rut ya existe!")
    } else {
        console.log(results);
        res.send(results);
    }

}

let allEstudiantes = async (req,res) => {
    let results = await consultarEstudiantes();
    res.send(results);
}

let queryPorRut = async (req,res) => {
    let { rut } = req.query;
    let results = await consultarPorRut(rut);
    if (results.length < 1) { // Si no hay gente con ese rut...
        res.send(`No hay resultados para el rut : ${rut}`)
    } else {
        res.send(results);
    }
    
}

let changeEstudiante = async (req,res) => {
    let { rut , nombre , curso , nivel} = req.query;
    console.log(rut)
    let results = await actualizarEstudiante(rut,nombre,curso,nivel);
    res.send(results);
}

let borrarEstudiante = async (req,res) => {
    let { rut } = req.query;
    let results = await borrarPorRut(rut);
    res.send(results);
}


export {
    home,
    addEstudiante,
    allEstudiantes,
    queryPorRut,
    changeEstudiante,
    borrarEstudiante
}