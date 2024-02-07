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

export const addCommentOnCurrentMap = async (mapId, mapData) => {
    let result = await fetch(`${baseUrl}/${mapId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mapData)
    })
}