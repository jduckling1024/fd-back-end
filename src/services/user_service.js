import User from "../databases/models/users.js";

const signUp = (userDto) => {
  User.create(userDto, (error) => {
    if (error) {
      const e = new Error("중복된 아이디입니다.");
      e.status = 404;
      throw e;
    }
  });
};

export {
  signUp,
}
