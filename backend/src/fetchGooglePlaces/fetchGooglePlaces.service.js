import {
  fetchGooglePlaces,
} from "./fetchGooglePlaces.repository.js";

export const fetchGooglePlacesService = async (info) => {
  console.log("Service called with info:", info);
  const response = await fetchGooglePlaces({ info });
  console.log("Fetched places from service:", response.places);
  if (!response || !response.places || response.places.length === 0) {
    return [];
  }

  await Promise.all(
    response.places.map(async (place) => {
      const exists = await checkRestaurantExists(place.id);
      if (!exists) {
        const result = await addRestaurantToDatabase(place, info.keyword);
        place.id2 = result.id.toString();
      } else {
        console.log(
          `Restaurant with ID ${place.id} already exists in the database.`
        );
        const id2 = await googlePlaceIdtoId(place.id);
        place.id2 = id2;
      }
    })
  );
  return response.places;
};
