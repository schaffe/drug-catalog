<template>
    <v-card>
        <v-card-title>
            <span class="headline">New drug</span>
        </v-card-title>
        <v-card-text>
            <v-text-field label="Title" required v-model="title"></v-text-field>
            <v-select
                    label="Category"
                    multiple
                    autocomplete
                    chips
                    v-model="group"
                    :items="['All drugs']"></v-select>
            <v-menu
                    lazy
                    :close-on-content-click="true"
                    v-model="menu"
                    transition="scale-transition"
                    offset-y
                    full-width
                    :nudge-left="40"
                    max-width="290px"
            >
                <v-text-field
                        slot="activator"
                        label="Picker in menu"
                        v-model="bestBefore"
                        prepend-icon="event"
                        readonly
                ></v-text-field>
                <v-date-picker v-model="bestBefore" no-title scrollable actions>
                    <!--<template scope="{ save, cancel }">-->
                    <!--<v-card-actions>-->
                    <!--<v-btn flat primary @click.native="cancel()">Cancel</v-btn>-->
                    <!--<v-btn flat primary @click.native="save()">Save</v-btn>-->
                    <!--</v-card-actions>-->
                    <!--</template>-->
                </v-date-picker>
            </v-menu>
            <v-text-field label="Amount" v-model="amount"></v-text-field>

            <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="blue--text darken-1" flat @click.native="back">Back</v-btn>
            <v-btn class="blue--text darken-1" flat @click="addDrug">Add</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import store from '../vuex/index';
    import router from '../router/index';

    export default {
        data () {
            return {
                menu: false,
                modal: false,
                title: null,
                group: null,
                bestBefore: null,
                amount: 1
            }
        },
        methods: {
            addDrug(){
                const payload = {
                    title: this.title,
                    group: this.group,
                    bestBefore: this.bestBefore,
                    amount: this.amount
                };
                console.log(payload);
                store.dispatch('addDrug', payload)
                    .then(() => router.back());
            },
            back() {
                router.back();
            }
        }
    }
</script>

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