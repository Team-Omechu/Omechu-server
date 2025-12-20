import { getRestData } from "../repositories/getRestaurant.repository.js";
import { NoRestData } from "../errors.js";
export const getRestaurant = async ({ userId = null, role, cursor, limit }) => {
  const restData = await getRestData(userId, role, cursor, limit);
  if (restData.error == "NO_DATA") {
    throw new NoRestData("맛집 정보가 없습니다", { userId: userId });
  } else {
    return restData;
  }
};
