import pg from 'pg';
import 'dotenv/config';

let { Pool } = pg;

let { DB_USER , DB_DATABASE , DB_HOST , DB_PORT, DB_PASSWORD} = process.env;


let config = {
    user : DB_USER,
    password : DB_PASSWORD,
    host : DB_HOST,
    port : DB_PORT,
    database : DB_DATABASE
};

let pool = new Pool(config);

// let testquery = async () => {
//     let response = await pool.query('SELECT now()')
//     console.log(response.rows)

// }

// testquery();

export {
    pool
}