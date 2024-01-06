import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()
const {
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASS,
  MYSQL_DB
} = process.env

let pool

const main = async () => {
  try {
    if (!pool) {
      const poolTemp = mysql.createPool({
        host: MYSQL_PORT,
        user: MYSQL_USER,
        password: MYSQL_PASS
      })
      await poolTemp.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}`)

      pool = mysql.createPool({
        host: MYSQL_PORT,
        user: MYSQL_USER,
        password: MYSQL_PASS,
        database: MYSQL_DB,
        connectionLimit: 10,
        timezone: 'Z'
      })
      return pool
    }
  } catch (error) {
    console.log(error)
  }
}
export default main
