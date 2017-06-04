import Resourses from './resourses';

let drugs = {
    get: () => fetch(Resourses.drugs.list),
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

export default {
    drugs,
}