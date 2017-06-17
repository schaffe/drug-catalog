<template>
    <div class="drugsList">
        <!--<h2>List</h2>-->
        <!--<create-drug></create-drug>-->
        <div class="filters">
            there will be like: select all, delete all, show only expired/nonexpired
        </div>
        <table class="table" v-if="drugs.length">
            <tr class="table-header">
                <th class="table-data table-data__left table-data__collapsed">
                    <input type="checkbox">
                </th>
                <th class="table-data table-data__left">Title</th>
                <th class="table-data table-data__left">Category</th>
                <th class="table-data table-data__left">Due Date</th>
                <th class="table-data table-data__right table-data__collapsed">Actual Number</th>
                <th class="table-data table-data__left">Action</th>
            </tr>
            <tbody class="table-content">
            <tr v-for="drug in drugs">
                <td class="table-data table-data__left table-data__collapsed">
                    <input type="checkbox">
                </td>
                <td class="table-data table-data__left">{{drug.title}}</td>
                <td class="table-data table-data__left">{{drug.group}}</td>
                <td class="table-data table-data__left" v-datetime:human="drug.bestBefore"></td>
                <td class="table-data table-data__right table-data__collapsed">{{drug.amount || '0'}}</td>
                <td class="table-data table-data__center table-data__collapsed">
                    <button @click="console.log('not implemented')">+</button>
                    <button @click="console.log('not implemented')">-</button>
                    <button @click="deleteDrug(drug.id)">X</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import store from '../vuex/index';
import datetime from '../directives/datetime';
export default{
    components: {
        CreateDrug: require('./CreateDrug.vue')
    },
    beforeCreate() {
        store.dispatch('fetchDrugs');
    },
    computed: {
        drugs() {
            return store.getters.drugsList;
        }
    },
    methods: {
        deleteDrug(id) {
            store.dispatch('deleteDrug', id);
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../css/color-palette";
.filters {
    padding: 15px;
    margin-top: 30px;
}
.table {
    width: 95%;
    /*border-spacing: 15px;*/
    border-collapse: separate;
    margin: 0 auto;
    border: 1px solid $tallow;
    border-radius: .28571429rem;
    &-header {
        background-color: $tallow;
    }
    .table-content  tr:last-child td{
        border-bottom: none;
    }
    &-data {
        padding: 10px 7px;
        border-left: 1px solid $tallow;
        border-bottom: 1px solid $tallow;
        text-align: left;
        &:first-child {
            border-left: none;
        }
        &__right {
            text-align: right;
        }
        &__left {
            text-align: left;
        }
        &__center {
            text-align: center;
        }
        &__collapsed {
            width: 1%;
            white-space: nowrap;
        }
    }
}
</style>