import errorHelper from '../../helpers/error.helper.js'
const main = async (user) => {
  try {
    // CONEXION A DB
    // DAR DE ALTA
    // DEVOLVER RESPUESTA
  } catch (error) {
    errorHelper.internalServerError(error.message, 'CREATE USER ERROR')
  }
}
export default main
