const token = () => {
    const tokenFromLocalStorage = localStorage.getItem('auth')
    if(tokenFromLocalStorage){
        const auth = JSON.parse(tokenFromLocalStorage);
        return auth.accessToken
    }else{
        return null
    }
}

const baseUrl = "http://localhost:3030/users";

export const register = async(data) => {
    let result = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    
    result = await result.json();

    if(result.accessToken) {
        console.log(result.accessToken);
        localStorage.setItem("auth", JSON.stringify(result));
    }

    return result
}

export const login = async (data) => {
    let result = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    result = await result.json();

    if(result.accessToken) {
        console.log(result.accessToken);
        localStorage.setItem("auth", JSON.stringify(result));
    }

    return result;
}

export const logout = async () => {
    let result = await fetch(`${baseUrl}/logout`, {
        method: "GET",
        headers: {
            'X-Authorization': token()
        }
    });

    if(result.ok) {
        localStorage.clear()
    }

    return result.ok;
}