exports.string = (lenght = 5, numeric = false) =>
{
    let result = "";
    const chars = numeric
        ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for(let i=0; i < lenght; i++ )
        result += chars.charAt(Math.floor(Math.random() * chars.length));

    return result;
};

exports.int = (range = 100) => {
    return Math.floor(Math.random() * range);
};

exports.decimal = () => {
    return Math.random();
};