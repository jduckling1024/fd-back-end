import user_service from "../../services/index.js";

const signUp = (req, res, next) => {
  const userDto = req.body;
  user_service.signUp(userDto);

};

const login = () => {
  // Temp
  console.log("login");
};

export {
  signUp,
  login,
};
