import { StatusCodes } from "http-status-codes";
import { bodyToUser } from "../dtos/auth.dto.js";
import { userSignUp } from "../services/auth.service.js";

export const handleUserSignUp = async (req, res, next) => {
  console.log("회원가입을 요청했습니다!");
  console.log("body:", req.body); 

  const user = await userSignUp(bodyToUser(req.body));

  // 세션에 로그인 정보 저장
  req.session.user = {
    id: user.id, 
    email: user.email,
  };

  console.log(req.session)

  res.status(StatusCodes.OK).json({ result: user });
};
