<template>
<div>
    <div class="field">
        <label for="title">Title</label>
        <input type="title" id="title" v-model="title">
    </div>
    <div class="field">
        <label for="category">Category</label>
        <input type="title" id="category" v-model="group">
    </div>
    <div class="field">
        <label for="due_date">Due date</label>
        <input type="date" id="due_date" v-model="bestBefore">
    </div>
    <div class="field">
        <label for="amount">Amount</label>
        <input type="number" id="amount" v-model="amount">
    </div>
    <input type="submit" value="Add" @click="addDrug">
</div>
</template>
<script>
import store from '../vuex/index';
export default {
    data(){
        return {
            title: '',
            group: '',
            bestBefore: new Date(),
            amount: 0,
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
    }
}
</script>
<style></style>