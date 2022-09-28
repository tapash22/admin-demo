<template>
    <div color="red">
        

            <v-list dense>
                <v-list-item v-for="item in items" :key="item.name" :to="item.path">
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
                    icon: 'mdi-account-circle',
                    path:'/profile'
                },
                {
                    title: 'My-Wallet',
                    icon: 'mdi-wallet',
                    path:'',
                },
                {
                    title: 'Setting',
                    icon: 'mdi-cog-outline',
                    path:''
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

