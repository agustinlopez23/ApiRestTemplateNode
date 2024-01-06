const badRequestError = (msg, code = 'BAD_REQUEST_ERROR') => {
  const err = new Error()
  err.code = code
  err.httpStatus = 400
  err.message = msg
  throw err
}

const notAuthorizedError = (msg, code = 'UNAUTHORIZED') => {
  const err = new Error()
  err.code = code
  err.httpStatus = 401
  err.message = msg
  throw err
}

const paymentRequiredError = (msg, code = 'PAYMENT_REQUIRED') => {
  const err = new Error()
  err.code = code
  err.httpStatus = 402 // Payment Required
  err.message = msg
  throw err
}

const forbiddenError = (msg, code = 'FORBIDDEN') => {
  const err = new Error()
  err.code = code
  err.httpStatus = 403
  err.message = msg
  throw err
}

const notFoundError = (msg, code = 'NOT_FOUND') => {
  const err = new Error()
  err.code = code
  err.httpStatus = 404
  err.message = msg
  throw err
}

const methodNotAllowedError = (msg, code = 'METHOD_NOT_ALLOWED') => {
  const err = new Error()
  err.code = code
  err.httpStatus = 405 // Method Not Allowed
  err.message = msg
  throw err
}

const notAcceptableError = (msg, code = 'NOT_ACCEPTABLE') => {
  const err = new Error()
  err.code = code
  err.httpStatus = 406 // Not Acceptable
  err.message = msg
  throw err
}

const proxyAuthenticationError = (msg, code = 'PROXY_AUTHENTICATION_REQUIRED') => {
  const err = new Error()
  err.code = code
  err.httpStatus = 407 // Proxy Authentication Required
  err.message = msg
  throw err
}
const requestTimeoutError = (msg, code = 'REQUEST_TIMEOUT') => {
  const err = new Error()
  err.code = code
  err.httpStatus = 408 // Request Timeout
  err.message = msg
  throw err
}
const conflictError = (msg, code = 'CONFLICT') => {
  const err = new Error()
  err.code = code
  err.httpStatus = 409
  err.message = msg
  throw err
}

const goneError = (msg, code = 'RESOURCE_GONE') => {
  const err = new Error()
  err.code = code
  err.httpStatus = 410 // Gone
  err.message = msg
  throw err
}

const validationError = (msg, code = 'VALIDATION_ERROR') => {
  const err = new Error()
  err.code = code
  err.httpStatus = 422 // Unprocessable Entity
  err.message = msg
  throw err
}

const internalServerError = (msg, code = 'INTERNAL_ERROR') => {
  const err = new Error()
  err.code = code
  err.httpStatus = 500
  err.message = msg
  throw err
}
export default {
  badRequestError,
  notAuthorizedError,
  paymentRequiredError,
  forbiddenError,
  notFoundError,
  methodNotAllowedError,
  validationError,
  goneError,
  internalServerError,
  proxyAuthenticationError,
  requestTimeoutError,
  notAcceptableError,
  conflictError

}
