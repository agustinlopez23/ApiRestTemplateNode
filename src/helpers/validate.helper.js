import errorHelper from './error.helper.js'
const main = async (schema, data) => {
  try {
    await schema.validateAsync(data)
  } catch (error) {
    // disparar error
    errorHelper.badRequestError(error.details[0]?.message)
  }
}
export default main
