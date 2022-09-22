<template>
    <div color="red">
        

            <v-list dense>
                <v-list-item v-for="item in items" :key="item.name">
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title single-line v-text="item.title"></v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list>
    </div>
</template>

<script>
export default {
    data(){
        return{
            items: [
                {
                    title: 'Profile',
                    icon: 'mdi-account-circle'
                },
                {
                    title: 'My-Wallet',
                    icon: 'mdi-wallet'
                },
                {
                    title: 'Setting',
                    icon: 'mdi-cog-outline'
                },
                {
                    title: 'Logout',
                    icon: 'mdi-power'
                },
            ],
        }
    }
}
</script>

