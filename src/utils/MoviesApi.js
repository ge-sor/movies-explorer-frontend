import {checkResponse} from "./checkResponse";

export const getMovies = () => {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(checkResponse);
}