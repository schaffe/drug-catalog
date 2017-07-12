import auth from "../../api/auth";

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

export default {
    state: {},
    getters: {
        getUser: state => state.user,
        isLoggedIn: state => state.isLoggedIn
    },
    actions: {
        login: (store, authData) => {
            store.commit(LOGIN);
            auth.login(authData)
                .then(user => store.commit(LOGIN_SUCCESS, user));
        },
        logout: (store) => {
            auth.logout()
                .then(() => store.commit(LOGOUT));
        }
    },
    mutations: {
        LOGIN: (state) => state.pending = true,
        LOGIN_SUCCESS: (state, user) => {
            state.isLoggedIn = true;
            state.pending = false;
            state.user = user;
        },
        LOGOUT: (state) => {
            state.isLoggedIn = false;
            delete state.user;
        }
    }
};