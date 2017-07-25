<template>
    <div class="drugsList">
        <!--<div class="field">-->
            <!--<label for="title">Title</label>-->
            <!--<input type="title" id="title" v-model="title">-->
        <!--</div>-->
        <!--<div class="field">-->
            <!--<label for="category">Category</label>-->
            <!--<input type="title" id="category" v-model="group">-->
        <!--</div>-->
        <!--<div class="field">-->
            <!--<label for="due_date">Due date</label>-->
            <!--<input type="date" id="due_date" v-model="bestBefore">-->
        <!--</div>-->
        <!--<div class="field">-->
            <!--<label for="amount">Amount</label>-->
            <!--<input type="number" id="amount" v-model="amount">-->
        <!--</div>-->
        <!--<input type="submit" value="Add" @click="addDrug">-->

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
                <td>{{drug.group}}</td>
                <td>{{drug.bestBefore || '-'}}</td>
                <td>{{drug.amount || '-'}}</td>
                <td><button @click="deleteDrug(drug.id)">X</button></td>
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
            title: '',
            group: '',
            bestBefore: new Date(),
            amount: 0
        };
    },
    computed: {
        drugs() {
            return store.getters.drugsList;
        }
    },
    methods: {
        addDrug(){
            store.dispatch('addDrug',{
                title: this.title,
                group: this.group,
                bestBefore: this.bestBefore,
                amount: this.amount
            })
        },
        deleteDrug(id) {
            store.dispatch('deleteDrug', id);
        }
    }
}
</script>