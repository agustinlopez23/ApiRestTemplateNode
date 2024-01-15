import jwt from "jsonwebtoken";
import errorHelper from "../helpers/error.helper.js";

const main = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      errorHelper.notAuthorizedError("Token requerido");
    }
    let tokenInfo;

    try {
      tokenInfo = jwt.verify(authorization, process.env.SECRET_KEY);
      req.user = tokenInfo;
      next();
    } catch (error) {
      errorHelper.notAuthorizedError("Token Invalido");
    }
  } catch (error) {
    next(error);
  }
};
