export const BodyToSearchRestaurant = (
  data,
  userId,
  role,
  cursor = 0,
  limit = 10
) => {
  return {
    menu: data.menu || [],
    location: data.location || [],
    tag: data.tag || [],
    userId: userId || null,
    role: role,
    cursor: parseInt(cursor),
    limit: parseInt(limit),
  };
};
