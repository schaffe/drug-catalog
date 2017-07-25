<template>
    <div>
        <drugs-list v-if="me"></drugs-list>
    </div>
</template>

<script>
import drugsList from '../components/DrugsList.vue';
import store from '../vuex/index';
import activeUser from '../components/ActiveUserHeader.vue'

export default {
    name: 'home',
    components: {
        drugsList,
        activeUser
    },
    computed: {
        me() {
            return store.getters.authUser;
        }
    }
}
</script>
