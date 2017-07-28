import drugs from "../../api/drugs";

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
        drugs.get()
            .then(response => response.json())
            .then(drugs => store.commit('ADD_ALL', drugs));
    },
    addDrug: (store, drug) => {
        drugs.post(drug)
            .then(res => res.json())
            .then(res => store.commit('ADD_DRUG', res));
    },
    deleteDrug: (store, id) => {
        drugs.delete(id)
            .then(res => res.json())
            .then(res => store.commit('REMOVE_DRUG', id))
    }
};
let mutations = {
    ADD_ALL: (state, drugs) => state.drugs = drugs,
    ADD_DRUG: (state, drug) => state.drugs.push(drug),
    REMOVE_DRUG: (state, id) => state.drugs = state.drugs.filter((drug) => drug.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
};