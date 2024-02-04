const baseUrl = "http://localhost:3030/data/maps";

export const getAllMaps = async () => {
    let result = await fetch(baseUrl);
    result = await result.json();
    
    return result;
} 

export const getMapById = async (mapId) => {
    let result = await fetch(`${baseUrl}/${mapId}`);
    result = await result.json();

    return result;
}
