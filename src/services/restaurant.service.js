import { fetchKakaoPlaces, fetchGooglePlaces, addRestaurantToDatabase, checkRestaurantExists } from "../repositories/restaurant.repository.js";

export const fetchKakaoPlacesService = async (info) => {
    console.log("Service called with info:", info);
    const documents = await fetchKakaoPlaces(info);
    console.log("검색된 장소 수:", documents.meta.total_count);
    const places = documents.documents;
    console.log("Fetched places from service:", places);
    return places;
}

export const fetchGooglePlacesService = async (info) => {
    console.log("Service called with info:", info);
    const response = await fetchGooglePlaces({ info });
    console.log("Fetched places from service:", response.places);
    if (!response || !response.places || response.places.length === 0) {
        return [];
    }


    await Promise.all(response.places.map(async (place) => {
        const exists = await checkRestaurantExists(place.displayName.text);
        if (!exists) {
            await addRestaurantToDatabase(place, info.keyword);
        }
    }));
    return response.places;
};
