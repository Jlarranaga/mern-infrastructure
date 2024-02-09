//calling to API in the backend 

const BASE_URL = '/api/users'

export async function signUp(userData) {
    //fetch making API request to server
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/son'},
        body: JSON.stringify(userData)
    })

    if(res.ok){ //<-- '.ok' gets a 200 return from server saying its good! ok comes from fetch (built in)
        return res.json() //<-- returns data 
    }else{
        throw new Error('Invalid Sign Up!')
    }
}