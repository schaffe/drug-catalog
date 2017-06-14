import ROOT_URL from "../config";

let drugs = {
    list: ROOT_URL + '/drugs',
    create: ROOT_URL + '/drugs',
};

export default {
    get: () => fetch(drugs.list),
    post: (drug) => {
        let data = JSON.stringify(drug);
        return fetch(Resourses.drugs.create, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: data
        });
    },
    delete: (id) => {
        return fetch(Resourses.drugs.list + `/${id}`, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            method: 'DELETE'
        })
    }
};