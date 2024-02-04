const baseUrl = "http://localhost:3030/data/maps";

export const getAllMaps = async () => {
    let result = await fetch(baseUrl);
    result = await result.json();
    
    return result;
} 
