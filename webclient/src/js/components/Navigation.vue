<template>
    <v-navigation-drawer permanent clipped light>
        <v-list dense class="pt-0">
            <v-list-tile v-for="item in items" :key="item.title" @click="item.action()">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import router from '../router/index';

    export default {
        data: () => ({
            items: [
                {icon: 'add', title: 'Add new drug', action: () => {
                    router.push("add");
                }},
                {icon: 'dashboard', title: 'All items', action: () => {
                    router.push("drugs");
                }},
            ]
        })
    }
</script>

<style>
    #navigation-1 a {
        text-decoration: none;
    }
</style>


<!--{ icon: 'lightbulb_outline', text: 'Notes' },-->
<!--{ icon: 'touch_app', text: 'Reminders' },-->
<!--{ divider: true },-->
<!--{ heading: 'Labels' },-->
<!--{ icon: 'add', text: 'Create new label' },-->
<!--{ divider: true },-->
<!--{ icon: 'archive', text: 'Archive' },-->
<!--{ icon: 'delete', text: 'Trash' },-->
<!--{ divider: true },-->
<!--{ icon: 'settings', text: 'Settings' },-->
<!--{ icon: 'chat_bubble', text: 'Trash' },-->
<!--{ icon: 'help', text: 'Help' },-->
<!--{ icon: 'phonelink', text: 'App downloads' },-->
<!--{ icon: 'keyboard', text: 'Keyboard shortcuts' }-->
