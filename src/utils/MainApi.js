import {checkResponse} from "./checkResponse";

export const BASE_URL = 'https://api.gesor-films.nomoredomains.work/'

export const getUser = () => {
    const token = localStorage.getItem('token')

    return fetch(`${BASE_URL}users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    }).then(checkResponse);
}

export const patchUser = ({name, email}) => {
    const token = localStorage.getItem('token')
    return fetch(`${BASE_URL}users/me`, {

        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        },
        body: JSON.stringify({
            email: email,
            name: name
        })
    }).then(checkResponse);
}

export const register = ({email, name, password}) => {

    return fetch(`${BASE_URL}signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password, name})
    }).then(checkResponse);
}

export const login = ({email, password}) => {

    return fetch(`${BASE_URL}signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(checkResponse);
}

export const getSavedMovies = () => {
    const token = localStorage.getItem('token')
    return fetch(`${BASE_URL}movies`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    }).then(checkResponse);
}

export const createMovie = (body) => {
    const token = localStorage.getItem('token')
    return fetch(`${BASE_URL}movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(body)
    }).then(checkResponse);
}

export const deleteMovie = (id) => {
    const token = localStorage.getItem('token')
    return fetch(`${BASE_URL}movies/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    }).then(checkResponse);
}
