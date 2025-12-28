import { 
   getMenuSearch} 
  from "./menuSearch.repository.js";


export const getMenuSearchService = async (keyword) => {
    try {
        console.log("Searching menu with keyword from service:", keyword);
        const searchResults = await getMenuSearch(keyword);
        if (!searchResults || searchResults.length === 0) {
            return null; // 검색 결과가 없으면 null 반환
        }
        console.log("Search results from service:", searchResults);
        return searchResults;
    } catch (error) {
        console.error("Error searching menu:", error);
        throw error; // 에러를 상위로 전달
    }
}
