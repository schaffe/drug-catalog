import Vue from 'vue'

Vue.directive('datetime', function (el, binding) {
    let time = binding.value;
    switch (binding.arg) {
        case 'human':
            let format = moment(time).format('DD MMMM YYYY');
            el.innerHTML = format;
            break;
        default:
            break;
    }
});