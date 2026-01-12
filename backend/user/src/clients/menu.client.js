import axios from "axios";

const MENU_SERVICE_BASE_URL = process.env.MENU_SERVICE_BASE_URL;

export const getAllMenus = async () => {
  try {
    const { data } = await axios.get(
      `${MENU_SERVICE_BASE_URL}/menu/menu-list`
    );
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("❌ getAllMenus failed:", err.response?.data || err.message);
    return []; // ← 여기 중요
  }
};


export const getMenuByName = async (menuName) => {
  const { data } = await axios.post(
    `${MENU_SERVICE_BASE_URL}/menu/menu-info`,
    { name: menuName }
  );

  // menuInfo 자체가 반환됨
  return data && data.id ? data : null;
};



export const getMenuById = async (menuId) => {
  const { data } = await axios.post(`${MENU_SERVICE_BASE_URL}/menu/menu-info`, {
    menuId,
  });
  return data.success.menu;
};
