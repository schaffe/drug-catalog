import api from "../../api/index";

let state = {
    drugs: []
};
let getters = {
    drugsList(store) {
        return store.drugs;
    }
};
let actions = {
    fetchDrugs: (store) => {
        api.drugs.get()
            .then(response => response.json())
            .then(drugs => store.commit('ADD_ALL', drugs));
    },
    addDrug: (store, drug) => {
        api.drugs.post(drug)
            .then(res => res.json())
            .then(res => store.commit('ADD_DRUG', res));
    },
    deleteDrug: (store, id) => {
        api.drugs.delete(id)
            .then(res => res.json())
            .then(res => store.commit('REMOVE_DRUG', id))
    }
};
let mutations = {
    ADD_ALL: (state, drugs) => state.drugs = state.drugs.concat(drugs),
    ADD_DRUG: (state, drug) => state.drugs.push(drug),
    REMOVE_DRUG: (state, id) => state.drugs = state.drugs.filter((drug) => drug.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
};