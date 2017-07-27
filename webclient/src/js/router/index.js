import Vue from "vue";
import Router from "vue-router";
import App from "../components/App.vue";
import DrugsList from "../components/DrugsList.vue";
import T from "../components/DrugTable.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: App
        }, {
            path: '/login',
            component: App
        },{
            path: '/drugs',
            component: T
        },

    ]
})