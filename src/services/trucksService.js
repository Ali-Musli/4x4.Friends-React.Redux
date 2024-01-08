const baseUrl = "http://localhost:3030/data/trucks"

export const getAll = async () => {
    let result = await fetch(baseUrl);
    result = await result.json();
    return result;
}

export const getTruckById = async (truckId) => {
    let result  = await fetch(`${baseUrl}/${truckId}`);
    result = await result.json();
    return result;
}