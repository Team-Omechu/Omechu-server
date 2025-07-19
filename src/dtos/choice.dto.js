//메뉴 추천시 사용자 응답 dto
export const bodyToChoice = (body) => {
    return {
        meal_time: body.meal_time,
        purpose: body.purpose,
        mood: body.mood,
        with: body.with,
        budget: body.budget,
        exceptions2: body.exceptions || [],
        weather: body.weather || "맑음" // 날씨 정보가 있다면 추가, 기본값은 "맑음"
    };
}

// {
// "meal_time" : 3,
// "purpose" : 3,
// "mood" : 3,
// "with" : 1,
// "budget" : 1,
// "exceptions" : ["중식", "면"],
// "gender" : 1,
// "exercise" : 3,
// "prefer" : ["한식","양식"],
// "body_type" : 4,
// "allergy" : ["갑각류"]

// }