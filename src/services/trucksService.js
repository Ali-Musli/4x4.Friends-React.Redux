export const getAll = async () => {
    let result = await fetch("http://localhost:3030/data/trucks");
    result = await result.json();
    return result;
}