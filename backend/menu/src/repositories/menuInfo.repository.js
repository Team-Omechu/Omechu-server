import { prisma } from "../db.config.js";

export const getMenuInfo = async (menuName) => {
  try {
    console.log("Fetching menu info for:", menuName);
    const menuInfo = await prisma.menu.findFirst({
      where: { name: menuName },
      select: {
        name: true,
        description: true,
        calory: true,
        carbo: true,
        protein: true,
        fat: true,
        sodium: true,
        image_link: true,
        menu_vitamin: {
          select: {
            vitamin: {
              select: {
                vitamin: true,
              },
            },
          },
        },
        menu_allergy: {
          select: {
            allergy: {
              select: {
                allergy: true,
              },
            },
          },
        },
      },
    });

    if (!menuInfo) {
      console.error(`No menu info found for: ${menuName}`);
      return null;
    }

    for (const key of ["calory", "carbo", "protein", "fat", "sodium"]) {
      if (menuInfo[key] !== null && menuInfo[key] !== undefined) {
        menuInfo[key] = Number(menuInfo[key]);
      }
    }

    const vitamins = menuInfo.menu_vitamin
      .map((item) => item.vitamin.vitamin)
      .filter(Boolean);
    const allergies = menuInfo.menu_allergy
      .map((item) => item.allergy.allergy)
      .filter(Boolean);

    const response = {
      name: menuInfo.name,
      description: menuInfo.description,
      calory: menuInfo.calory,
      carbo: menuInfo.carbo,
      protein: menuInfo.protein,
      fat: menuInfo.fat,
      sodium: menuInfo.sodium,
      image_link: menuInfo.image_link,
      vitamin: vitamins,
      allergic: allergies,
    };

    console.log("Menu info fetched successfully:", response);
    return response;
  } catch (error) {
    console.error(`Error fetching menu info for ${menuName}:`, error);
    throw error;
  }
};
