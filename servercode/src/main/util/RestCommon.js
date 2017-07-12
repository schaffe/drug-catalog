module.exports = (() => {
    return {
        handleError: (res, error, statusCode = 400) => {
            console.error(error);
            res.status(statusCode).json({'error': error});
        }
    }
})();