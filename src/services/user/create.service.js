import errorHelper from '../../helpers/error.helper.js'
import getPool from '../../db/getPool.js'
const main = async (user) => {
  try {
    // CONEXION A DB
    const pool = await getPool()
    // DAR DE ALTA
    const sqlQuery = 'INSERT INTO users (email,password) VALUES (?,?)'
    const values = [user.email, user.password]
    const [response] = await pool.query(sqlQuery, values)
    if (response.affectedRows !== 1) { errorHelper.conflictError('Error al insertar el usuario', 'CREATE USER ERROR') }
    // DEVOLVER RESPUESTA
    return response.insertId
  } catch (error) {
    errorHelper.internalServerError(error.message, 'CREATE USER ERROR')
  }
}
export default main
