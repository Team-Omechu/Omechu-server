import {
  getMenu,
  getMenuInfo,
  recommendRandom,
  recommendMenu,
} from "../repositories/menu.repository.js";
export const recommendMenuService = async (choice, userId) => {
  const menus = await recommendMenu(choice, userId);
  console.log("Menu recommendation from service:", menus);
  if (!menus) {
    console.error("No menu recommendation found in service");
    return null;
  }
  // 배열 순회하면서 각 항목 처리 및 데이터베이스 저장 (최대 3개만)
  // for (let i = 0; i < Math.min(3, menus.length); i++) {
  //   const item = menus[i];
  //   const index = i;
  //   const menuName = item.menu;
  //   const description = item.description;
  //   const calories = item.calories;
  //   const carbs = item.carbohydrates;
  //   const protein = item.protein;
  //   const fat = item.fat;
  //   const sodium = item.sodium;
  //   const vitamins = item.vitamins;
  //   const allergies = item.allergies;

  //   console.log(`✅ [${index + 1}] ${menuName}`);
  //   console.log(`   - 설명: ${description}`);
  //   console.log(`   - 칼로리: ${calories} kcal`);
  //   console.log(`   - 탄수화물: ${carbs}g`);
  //   console.log(`   - 단백질: ${protein}g`);
  //   console.log(`   - 지방: ${fat}g`);
  //   console.log(`   - 나트륨: ${sodium}mg`);
  //   console.log(`   - 비타민: ${vitamins.join(", ")}`);
  //   console.log(`   - 알레르기: ${allergies.join(", ")}`);

  //   // 데이터베이스에 메뉴가 존재하는지 확인
  //   const menuExists = await checkMenuExists(menuName);

  //   // 메뉴가 존재하지 않으면 데이터베이스에 추가
  //   if (!menuExists) {
  //     try {
  //       await addMenuToDatabase({
  //         menuName,
  //         description,
  //         calories,
  //         carbs,
  //         protein,
  //         fat,
  //         sodium,
  //         vitamins,
  //         allergyInfo: allergies,
  //       });
  //       console.log(`💾 Menu saved to database: ${menuName}`);
  //     } catch (dbError) {
  //       console.error(`Error saving menu to database: ${menuName}`, dbError);
  //     }
  //   } else {
  //     console.log(`📋 Menu already exists in database: ${menuName}`);
  //   }
  // }

  return menus;
};

export const getMenuInfoService = async (menuName) => {
  try {
    const menuInfo = await getMenuInfo(menuName);
    if (!menuInfo) {
      console.error(`No menu info found for: ${menuName}`);
      return null;
    }
    return menuInfo;
  } catch (error) {
    console.error(`Error fetching menu info for ${menuName}:`, error);
    throw error;
  }
};

export const recommendRandomService = async (addition) => {
  try {
    const randomMenu = await recommendRandom(addition);
    if (!randomMenu) {
      console.error("No random menu found");
      return null;
    }
    return randomMenu;
  } catch (error) {
    console.error("Error fetching random menu:", error);
    throw error;
  }
};

export const getMenuService = async () => {
  try {
    const menus = await getMenu();
    if (!menus || menus.length === 0) {
      console.error("No menus found in service");
      return [];
    }
    return menus;
  } catch (error) {
    console.error("Error fetching menus from service:", error);
    throw error;
  }
};
