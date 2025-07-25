import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

/**
 * 사용자 프로필 조회
 */
export const findUserProfile = async (userId) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: BigInt(userId) },
      select: {
        id: true,
        email: true,
        // phone_num 필드가 스키마에 없음
        nickname: true,
        body_type: true,
        gender: true,
        exercise: true,
        profileImageUrl: true,  
        created_at: true,
        updated_at: true,
        // 관계 테이블에서 데이터 조회
        allergy: {
          select: {
            allergy: true
          }
        },
        prefer: {
          select: {
            prefer: true
          }
        }
      }
    });

    if (!user) return null;

    // 관계 데이터를 문자열로 변환
    const allergies = user.allergy?.map(a => a.allergy).join(', ') || '';
    const preferences = user.prefer?.map(p => p.prefer).join(', ') || '';

    // BigInt 변환 및 데이터 정리
    return {
      ...user,
      id: user.id.toString(),
      allergic: allergies,  // 관계 테이블에서 가져온 데이터
      prefer: preferences,  // 관계 테이블에서 가져온 데이터
      phone_num: null       // 스키마에 없으므로 null로 설정
    };

  } catch (error) {
    console.error('사용자 프로필 조회 오류:', error);
    throw error;
  }
};

/**
 * 사용자 프로필 업데이트
 */
export const updateUserProfile = async (userId, data) => {
  try {
    const updateData = {
      updated_at: new Date()
    };

    
    if (data.email !== undefined) updateData.email = data.email;
    if (data.nickname !== undefined) updateData.nickname = data.nickname;
    if (data.body_type !== undefined) updateData.body_type = data.body_type;
    if (data.gender !== undefined) updateData.gender = data.gender;
    if (data.exercise !== undefined) updateData.exercise = data.exercise;
    if (data.profileImageUrl !== undefined) updateData.profileImageUrl = data.profileImageUrl;
    

    const updatedUser = await prisma.user.update({
      where: { id: BigInt(userId) },
      data: updateData,
      include: {
        allergy: {
          select: {
            allergy: true
          }
        },
        prefer: {
          select: {
            prefer: true
          }
        }
      }
    });

    // 관계 데이터를 문자열로 변환
    const allergies = updatedUser.allergy?.map(a => a.allergy).join(', ') || '';
    const preferences = updatedUser.prefer?.map(p => p.prefer).join(', ') || '';

    return {
      ...updatedUser,
      id: updatedUser.id.toString(),
      allergic: allergies,
      prefer: preferences,
      phone_num: null  
    };

  } catch (error) {
    console.error('사용자 프로필 업데이트 오류:', error);
    throw error;
  }
};

/**
 * 맛집 정보 조회 
 */
export const findRestaurantById = async (restaurantId) => {
  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: { id: BigInt(restaurantId) }
    });

    if (!restaurant) return null;

    return {
      ...restaurant,
      id: restaurant.id.toString()
    };

  } catch (error) {
    console.error('맛집 조회 오류:', error);
    throw error;
  }
};

/**
 * 사용자가 등록한 맛집 개수 조회 
 */
export const countUserRestaurants = async (userId) => {
  try {
    // user_rest 관계 테이블을 사용하여 사용자가 등록한 맛집 개수 조회
    const count = await prisma.user_rest.count({
      where: { user_id: BigInt(userId) }
    });
    return count;

  } catch (error) {
    console.error('사용자 맛집 개수 조회 오류:', error);
    throw error;
  }
};

/**
 * 사용자가 등록한 맛집 목록 조회
 */
export const findUserRestaurants = async (userId, limit, cursor) => {
  try {
    const userRestaurants = await prisma.user_rest.findMany({
      where: { user_id: BigInt(userId) },
      include: {
        restaurant: true
      },
      take: limit + 1,
      ...(cursor ? {
        cursor: { id: BigInt(cursor) },
        skip: 1
      } : {}),
      orderBy: { id: 'desc' }
    });

    const hasNextPage = userRestaurants.length > limit;
    const slicedUserRestaurants = hasNextPage ? userRestaurants.slice(0, limit) : userRestaurants;
    const nextCursor = hasNextPage ? slicedUserRestaurants[slicedUserRestaurants.length - 1].id : null;

    // 맛집 정보만 추출
    const restaurants = slicedUserRestaurants.map(userRest => ({
      ...userRest.restaurant,
      id: userRest.restaurant.id.toString()
    }));

    return {
      data: restaurants,
      hasNextPage,
      nextCursor: nextCursor ? nextCursor.toString() : null
    };

  } catch (error) {
    console.error('사용자 맛집 목록 조회 오류:', error);
    throw error;
  }
};

/**
 * 맛집 정보 업데이트
 */
export const updateRestaurant = async (restaurantId, data) => {
  try {
    const updateData = {};
    
    
    if (data.name !== undefined) updateData.name = data.name;
    if (data.address !== undefined) updateData.address = data.address;
    if (data.location !== undefined) updateData.location = data.location;
    if (data.rest_image !== undefined) updateData.rest_image = data.rest_image;
    
    // 요일별 영업시간 
    if (data.monday !== undefined) updateData.monday = data.monday;
    if (data.tuesday !== undefined) updateData.tuesday = data.tuesday;
    if (data.wednesday !== undefined) updateData.wednesday = data.wednesday;
    if (data.thursday !== undefined) updateData.thursday = data.thursday;
    if (data.friday !== undefined) updateData.friday = data.friday;
    if (data.saturday !== undefined) updateData.saturday = data.saturday;
    if (data.sunday !== undefined) updateData.sunday = data.sunday;

    // repre_menu는 별도 테이블이므로 여기서는 제외

    const updatedRestaurant = await prisma.restaurant.update({
      where: { id: BigInt(restaurantId) },
      data: updateData
    });

    return {
      ...updatedRestaurant,
      id: updatedRestaurant.id.toString()
    };

  } catch (error) {
    console.error('맛집 업데이트 오류:', error);
    throw error;
  }
};

/**
 * 찜 조회
 */
export const findZzim = async (userId, restaurantId) => {
  try {
    const zzim = await prisma.zzim.findFirst({
      where: {
        user_id: BigInt(userId),
        rest_id: BigInt(restaurantId)
      }
    });

    if (!zzim) return null;

    return {
      ...zzim,
      id: zzim.id.toString(),
      user_id: zzim.user_id.toString(),
      rest_id: zzim.rest_id.toString()
    };

  } catch (error) {
    console.error('찜 조회 오류:', error);
    throw error;
  }
};

/**
 * 찜 생성
 */
export const createZzim = async (userId, restaurantId) => {
  try {
    const newZzim = await prisma.zzim.create({
      data: {
        user_id: BigInt(userId),
        rest_id: BigInt(restaurantId),
        created_at: new Date()
      }
    });

    return {
      ...newZzim,
      id: newZzim.id.toString(),
      user_id: newZzim.user_id.toString(),
      rest_id: newZzim.rest_id.toString()
    };

  } catch (error) {
    console.error('찜 생성 오류:', error);
    throw error;
  }
};

/**
 * 찜 삭제
 */
export const deleteZzim = async (zzimId) => {
  try {
    await prisma.zzim.delete({
      where: { id: BigInt(zzimId) }
    });

    return { success: true };

  } catch (error) {
    console.error('찜 삭제 오류:', error);
    throw error;
  }
};

/**
 * 사용자 찜 개수 조회
 */
export const countUserZzims = async (userId) => {
  try {
    const count = await prisma.zzim.count({
      where: { user_id: BigInt(userId) }
    });

    return count;

  } catch (error) {
    console.error('사용자 찜 개수 조회 오류:', error);
    throw error;
  }
};

/**
 * 사용자 찜 목록 조회
 */
export const findUserZzims = async (userId, limit, cursor) => {
  try {
    const zzimList = await prisma.zzim.findMany({
      where: { user_id: BigInt(userId) },
      include: {
        restaurant: true
      },
      take: limit + 1,
      ...(cursor ? {
        cursor: { id: BigInt(cursor) },
        skip: 1
      } : {}),
      orderBy: { created_at: 'desc' }
    });

    const hasNextPage = zzimList.length > limit;
    const slicedZzims = hasNextPage ? zzimList.slice(0, limit) : zzimList;
    const nextCursor = hasNextPage ? slicedZzims[slicedZzims.length - 1].id : null;

    // BigInt 변환
    const formattedZzimList = slicedZzims.map(zzim => ({
      ...zzim,
      id: zzim.id.toString(),
      user_id: zzim.user_id.toString(),
      rest_id: zzim.rest_id.toString(),
      restaurant: zzim.restaurant ? {
        ...zzim.restaurant,
        id: zzim.restaurant.id.toString()
      } : null
    }));

    return {
      data: formattedZzimList,
      hasNextPage,
      nextCursor: nextCursor ? nextCursor.toString() : null
    };

  } catch (error) {
    console.error('사용자 찜 목록 조회 오류:', error);
    throw error;
  }
};