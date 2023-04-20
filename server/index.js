const Pool = require('pg').Pool
const data = require('./data.json')
require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOSTNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
})

const sqlValues = data.map((flat, index) => {
    const images = flat.images.map(image => `'${image.href}'`).join(',')
    return `('${index}', '${flat.name}', '${flat.locality}', ARRAY [${images}])`
}).join(',')

pool.query(`INSERT INTO sreality (id, name, locality, images) VALUES ${sqlValues}`).then(res => console.log('success')).catch(err => console.log('error', err))

app.get('/flats', (request, response) => {
    const {limit, offset} = request.query
    pool.query(`SELECT *
                FROM sreality
                LIMIT ${limit} OFFSET ${offset * limit}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
