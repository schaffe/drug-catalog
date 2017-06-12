const getUser = (login) => {
    if (login === "admin")
        return Promise.resolve({
            login: "admin",
            password: "$2a$10$SN0l7KEZ94ox5.VaqKW3xeE79J1xNWxpirUvu4Thnsc3zkjkA5dAS"
        });
    else
        return Promise.reject("User was not found");
};

module.exports = (() => {
    return {
        getUser: getUser
    }
})();

