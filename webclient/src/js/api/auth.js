import ROOT_URL from "../config";

let auth = {
    login: ROOT_URL + '/auth',
    logout: ROOT_URL + '/auth'
};

export default {
    login: (authData) => {
        let data = JSON.stringify(authData);
        return fetch(auth.login, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: data,
            credentials: 'same-origin'
        }).then(response => response.json());
    },
    logout: () => {
        return fetch(auth.logout, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
            credentials: 'same-origin'
        })
    }
};