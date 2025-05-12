
export default class Api {
    constructor() {
        this.baseUrl = "https://6813a9f5129f6313e211fc92.mockapi.io";

    }

    getCards() {
        return fetch(`${this.baseUrl}/products`)
            .then(response => response.json())
            .then(data => { return data; })
            .catch(error => {
                console.error("Error al obtener los datos:", error);
            });
    }
}
export const api = new Api();