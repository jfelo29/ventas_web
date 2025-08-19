import { getToken } from "./token";
class Api {
    constructor(baseUrl, headers) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }


    getUserInfo = () => {
        return fetch(this.baseUrl + "/users/me", {
            method: "GET",
            headers: {
                ...this.headers,
                authorization: getToken()
            },
        }).then((response) => {
            if (response.ok) return response.json();

            return Promise.reject("Something went wrong");
        });
    }
    getCards() {
        return fetch(`${this.baseUrl}/products`)
            .then(response => { return response.json() })

            .catch(error => {
                console.error("Error al obtener los datos:", error);
            });
    }

    editUserInfo = () => {
        return fetch(this.baseUrl + "/users/me", {
            method: "PATCH",
            headers: {
                ...this.headers,
                authorization: getToken()
            },
            body: JSON.stringify(data)
        }).then((response) => {
            if (response.ok) return response.json();

            return Promise.reject("Something went wrong");
        });
    }

}
const baseUrl = "https://back-ventas-delta.vercel.app";
const headers = {
    "Content-Type": "application/json",
    authorization: getToken()
}

export const api = new Api(baseUrl, headers);
