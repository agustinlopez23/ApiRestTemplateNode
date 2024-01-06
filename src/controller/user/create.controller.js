import validateHelper from '../../helpers/validate.helper.js'
import userService from '../../services/index.service.js'
import schema from '../../schemas/user/create.schema.js'
const main = async (req, res, next) => {
  try {
    // validar esquema
    await validateHelper(schema, req.body)
    // enviar datos al servicio
    await userService.create(req.body)
    // responder
    res.json({ message: 'Usuario Creado con Exito' })
  } catch (error) {
    next(error)
  }
}
export default main
