import api from '../../api/index';

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
            .then((response) => {
                response.forEach(item => store.commit('ADD_DRUG', item))
            });
    }
};
let mutations = {
    ADD_DRUG: (state, drug) => state.drugs.push(drug)
};

export default {
    state,
    getters,
    actions,
    mutations
};