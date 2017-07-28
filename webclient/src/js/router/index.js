import Vue from "vue";
import Router from "vue-router";
import App from "../components/App.vue";
import Table from "../components/DrugTable.vue";
import Add from "../components/AddDrugModal.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Table
        }, {
            path: '/login',
            component: App
        }, {
            path: '/drugs',
            component: Table
        }, {
            path: '/add',
            component: Add
        },

    ]
})