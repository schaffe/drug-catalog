<template>
    <div class="drugsList">
        <h2>Drugs in your home</h2>
        <h3>Have you something new?</h3>
        <div class="field">
            <label for="title">Title</label>
            <input type="title" id="title" v-model="title">
        </div>
        <div class="field">
            <label for="category">Category</label>
            <input type="title" id="category" v-model="category">
        </div>
        <div class="field">
            <label for="due_date">Due date</label>
            <input type="date" id="due_date" v-model="due_date">
        </div>
        <div class="field">
            <label for="amount">Amount</label>
            <input type="number" id="amount" v-model="amount">
        </div>
        <input type="submit" value="Add" @click="addDrug">

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
            title: '',
            category: '',
            due_date: new Date(),
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
                group: this.category.split(' '),
                bestBefore: this.due_date,
                number: this.amount
            })
        },
    }
}
</script>

<style>
    .drugsList h1 {
        color: cadetblue;
    }

    .field {
        display: inline-block;
    }


    .field>input {
        display: block;
    }
    
    .list {
        width: 100%;
        border-spacing: 15px;
    }
</style>