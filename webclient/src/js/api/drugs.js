import ROOT_URL from "../config";

let drugs = {
    list: ROOT_URL + '/drugs',
    create: ROOT_URL + '/drugs',
};

export default {
    get: () => fetch(drugs.list, {
        credentials: 'same-origin'
    }),
    post: (drug) => {
        let data = JSON.stringify(drug);
        return fetch(drugs.create, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: data,
            credentials: 'same-origin'
        });
    },
    delete: (id) => {
        return fetch(drugs.list + `/${id}`, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
            credentials: 'same-origin'
        })
    }
};