import status_holder from "../common/status_holder.js";
import http_status_codes from "../common/http_status_codes.js";
import User from "../databases/models/users.js";

const signUp = async (userDto) => {
  const http_status = await User.create(userDto)
    .then(() => {
      return status_holder(http_status_codes.OK, "성공적으로 등록하였습니다", null);
    })
    .catch(() => {
      return status_holder(http_status_codes.BAD_REQUEST, "등록 중 오류가 발생하였습니다", null);
    });

  return http_status;
};

export {
  signUp,
}
