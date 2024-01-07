import errorHelper from '../../helpers/error.helper.js'
import getPool from '../../db/getPool.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const main = async (user) => {
  try {
    // CONEXION A DB
    const pool = await getPool()
    // buscar usuario
    const sqlQuery = 'SELECT * FROM users WHERE email (?)'
    const values = [user.email]
    const [users] = await pool.query(sqlQuery, values)

    if (users.length === 0) { errorHelper.notFoundError('Usuario no encontrado', 'USER_NOT_FOUND') }
    const validation = await bcrypt.compare(user.password, users[0].password)
    if (!validation) {
      errorHelper.notAuthorizedError('Contraseña o usuario incorrecto', 'USER_NOT_FOUND')
    }
    const tokenInfo = {
      id: users[0].id
    }
    const token = jwt.sign(tokenInfo, process.env.SECRET_KEY, { expiresIn: [process.env.EXP_TOKEN] })
    // DEVOLVER RESPUESTA
    return token
  } catch (error) {
    errorHelper.internalServerError(error.message, 'CREATE USER ERROR')
  }
}
export default main
