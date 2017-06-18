import auth from "../../api/auth";

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

export default {
    state: {
        user: null
    },
    getters: {
        authUser: (state) => {
            return state.user ;
        },
        isLoggedIn: state => state.isLoggedIn
    },
    actions: {
        login: (store, authData) => {
            store.commit(LOGIN);
            auth.login(authData)
                .then(user => {
                    localStorage.setItem('user', JSON.stringify(user));
                    store.commit(LOGIN_SUCCESS, user);
                });
        },
        logout: (store) => {
            auth.logout()
                .then(() => {
                    localStorage.removeItem('user');
                    store.commit(LOGOUT);
                });
        },
        getUser: (store) => {
            let savedUser = JSON.parse(localStorage.getItem('user'));
            if (savedUser) store.commit(LOGIN_SUCCESS, savedUser);
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
            state.user = null;
        }
    }
};