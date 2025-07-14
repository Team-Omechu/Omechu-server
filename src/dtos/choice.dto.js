export const bodyToChoice = (body) => {
    return {
        meal_time: body.meal_time,
        purpose: body.purpose,
        mood: body.mood,
        with: body.with,
        budget: body.budget,
        exceptions: body.exceptions || [], // 예외사항이 있다면 추가
        gender: body.gender,
        exercise: body.exercise,
        prefer: body.prefer || [], // 선호하는 음식 종류가 있다면 추가
        body_type: body.body_type,
        allergy: body.allergy || [], // 알레르기가 있다면 추가
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