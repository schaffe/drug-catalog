<template>
    <v-data-table
            v-bind:headers="headers"
            :items="items"
            hide-actions
            class="elevation-1"
    >
        <template slot="items" scope="props">
            <td>{{ props.item.title }}</td>
            <td class="text-xs-right">{{ props.item.group }}</td>
            <td class="text-xs-right">{{ props.item.bestBefore }}</td>
            <td class="text-xs-right">{{ props.item.amount }}</td>

        </template>
    </v-data-table>
</template>

<script>
    import store from '../vuex/index';

    export default{
        beforeCreate() {
            store.dispatch('fetchDrugs');
        },
        data () {
            return {
                headers: [
                    {
                        text: 'Title',
                        value: 'title',
                        align: 'left',
                        sortable: false
                    },
                    {text: 'Category', value: 'group'},
                    {text: 'Due Date', value: 'bestBefore'},
                    {text: 'Actual Number', value: 'amount'},
                ]
            }
        },
        computed: {
            items() {
                return store.getters.drugsList;
            }
        }
    }
</script>

