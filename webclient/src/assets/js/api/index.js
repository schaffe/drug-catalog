import ROOT_URL from '../config';

console.log('ROOT_URL', ROOT_URL);
let drugs = {
    get: () => fetch(ROOT_URL + '/drugs'),
};

export default {
    drugs,
}