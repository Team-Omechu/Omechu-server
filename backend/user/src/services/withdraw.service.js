// backend/user/src/services/withdraw.service.js
import axios from "axios";
import { prisma } from "../db.config.js";
import {
  NoParams,
  NoInCorrectParmas,
  NoRestData,
} from "../errors.js";

const AUTH_SERVICE_BASE_URL = process.env.AUTH_SERVICE_BASE_URL;

export const withdrawService = async (userId, confirmed, reason) => {
  if (!userId) {
    throw new NoParams("사용자 ID가 필요합니다.");
  }

  if (!confirmed) {
    throw new NoInCorrectParmas("안내사항 확인이 필요합니다.");
  }

  if (!reason || reason.trim() === "") {
    throw new NoInCorrectParmas("탈퇴 사유를 입력해주세요.");
  }

  try {
    /** auth 서비스 탈퇴 처리 */
    await axios.post(
      `${AUTH_SERVICE_BASE_URL}/auth/internal/withdraw`,
      { userId },
      {
        headers: {
          Authorization: "Internal-Service user-service",
        },
      }
    );

    /** user soft delete */
    await prisma.user.update({
      where: { id: BigInt(userId) },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
      },
    });

    await prisma.user_withdrawal.create({
      data: {
        user_id: BigInt(userId),
        reason,
      },
    });

    return {
      success: true,
      message: "탈퇴가 정상적으로 처리되었습니다.",
    };
  } catch (error) {
    throw new NoRestData("회원 탈퇴 처리 중 오류가 발생했습니다.", {
      userId,
      error: error.message,
    });
  }
};
