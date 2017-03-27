<template>
    <div class="drugsList">
        <h2>Drugs in your home</h2>
        <table class="list">
            <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Due Date</th>
                <th>Actual Number</th>
                <th>Action</th>
            </tr>
            <tr v-for="drug in drugs">
                <td>{{drug.title}}</td>
                <td>{{drug.category}}</td>
                <td>{{drug.date || '-'}}</td>
                <td>{{drug.number || '-'}}</td>
                <td>{{drug.action}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import store from '../vuex/index';

export default{
    beforeCreate() {
        store.dispatch('fetchDrugs');
    },
    data(){
        return {
        };
    },
    computed: {
        drugs() {
            return store.getters.drugsList;
        }
    }
}
</script>

<style>
    .drugsList h1 {
        color: cadetblue;
    }

    .list {
        width: 100%;
        border-spacing: 15px;
    }
</style>