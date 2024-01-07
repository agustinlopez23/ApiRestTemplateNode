import validateHelper from '../../helpers/validate.helper.js'
import userService from '../../services/index.service.js'
import schema from '../../schemas/user/login.schema.js'
import bcrypt from 'bcrypt'
const main = async (req, res, next) => {
  try {
    // validar esquema
    await validateHelper(schema, req.body)
    // enviar datos al servicio
    const token = await userService.login(req.body)
    // responder
    res.json({ message: 'Usuario Creado con Exito' })
  } catch (error) {
    next(error)
  }
}
export default main
