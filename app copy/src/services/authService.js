const baseUrl = "http://localhost:3030/users";

export const login = async (data) => {
    let result = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    result = await result.json();
    console.log(result);

    if(result.accessToken) {
        console.log(result.accessToken);
        localStorage.setItem("auth", JSON.stringify(result))
    }

    return result;
}