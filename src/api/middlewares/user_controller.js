import user_service from "../../services/index.js";

const signUp = async (req, res) => {
  const userDto = req.body;
  const result = await user_service.signUp(userDto);
  res
    .status(result.status)
    .json({ message: result.message })
    .send();
};

const login = () => {
  // Temp
  console.log("login");
};

export {
  signUp,
  login,
};
