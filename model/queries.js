import { pool } from '../model/db.js';


let registrarEstudiante = async (nombre,rut,curso,nivel) => {
    try {
        let sql = {
            text : 'INSERT INTO estudiantes (nombre,rut,curso,nivel) VALUES ($1,$2,$3,$4) RETURNING *',
            values : [nombre,rut,curso,nivel]
        }
        let response = await pool.query(sql);
        return response.rows;
    } catch (error) {
        console.log(`Error : ${error.message}`);
        console.log(`Código error : ${error.code}`)
        return error.code;
    }
}

let consultarEstudiantes = async() => {
    try {
        let sql = {
            text : 'SELECT * FROM estudiantes'
        }
        let response = await pool.query(sql);
        return response.rows;
    } catch (error) {
        console.log(`Error : ${error.message}`);
        console.log(`Código error : ${error.code}`)
        return error.code;
    }
}

let consultarPorRut = async(rut) => {
    try {
        let sql = {
            text : 'SELECT * FROM estudiantes WHERE rut = $1',
            values : [rut]
        }

        let response = await pool.query(sql);
        return response.rows;
    } catch (error) {
        console.log(`Error : ${error.message}`);
        console.log(`Código error : ${error.code}`)
        return error.code;
    }
}

let actualizarEstudiante = async(rut = '',nombre = '',curso = '',nivel = '') => {
    if (rut === '') {
        let mensaje =  "Se debe dar Rut mínimo"
        return mensaje;}
    else if (rut != '' && nombre != '' && curso === '' && nivel === '') {
        try {
            let sql = {
                text : 'UPDATE estudiantes set nombre = $1 WHERE rut = $2 RETURNING *',
                values : [nombre,rut]
            }
            let response = await pool.query(sql);
            return response.rows;
        } catch (error) {
            console.log(`Error : ${error.message}`);
            console.log(`Código error : ${error.code}`)
            return error.message;
        }
    } else if (rut != '' && nombre != '' && curso != '' && nivel === '') {
        try {
            let sql = {
                text : 'UPDATE estudiantes set nombre = $1 , curso = $2 WHERE rut = $3 RETURNING *',
                values : [nombre,curso,rut]
            }
            let response = await pool.query(sql);
            return response.rows;
        } catch (error) {
            console.log(`Error : ${error.message}`);
            console.log(`Código error : ${error.code}`)
            return error.message;
        }
    } else if (rut != '' && nombre != '' && curso != '' && nivel != '') {
        try {
            let sql = {
                text : 'UPDATE estudiantes set nombre = $1 , curso = $2 , nivel = $3 WHERE rut = $4 RETURNING *',
                values : [nombre,curso,nivel,rut]
            }
            let response = await pool.query(sql);
            return response.rows;
        } catch (error) {
            console.log(`Error : ${error.message}`);
            console.log(`Código error : ${error.code}`)
            return error.message;
        }
    }
}

let borrarPorRut = async(rut) => {
    try {
        let sql = {
            text : 'DELETE FROM estudiantes WHERE rut = $1 RETURNING *',
            values : [rut]
        }

        let response = await pool.query(sql);
        return response.rows;
    } catch (error) {
        console.log(`Error : ${error.message}`);
        console.log(`Código error : ${error.code}`)
        return error.code;
    }
}



export {
    registrarEstudiante,
    consultarEstudiantes,
    consultarPorRut,
    actualizarEstudiante,
    borrarPorRut
}