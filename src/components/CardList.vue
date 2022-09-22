<template>
    <v-container>
        <v-card>
            <v-card-title class="text-h5 font-italic">
                FRIEND SUGGESTION
            </v-card-title>
            <v-list v-for="card in cards" :key="card.name">
                <v-list-item >
                    
                    <v-list-item-avatar>
                        <v-img :src="card.img"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{card.name}}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{card.sub}}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-icon class="mx-5">
                        <v-icon class="white--text indigo darken-3 rounded-circle">
                            {{card.icon}}
                        </v-icon>
                    </v-list-item-icon>
                </v-list-item>
                <v-divider v-if="card.insert" :inset="card.inset">
                </v-divider>

            </v-list>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    name: "Tapash",
                    icon: 'mdi-plus',
                    img: 'https://randomuser.me/api/portraits/men/85.jpg',
                    sub: "as a front-end-developer",
                    insert: true
                },
                {
                    name: "Paul",
                    icon: 'mdi-plus',
                    img: 'https://randomuser.me/api/portraits/men/85.jpg',
                    sub: "as a front-end-developer",
                    insert: true
                },
                {
                    name: "Tapash",
                    icon: 'mdi-plus',
                    img: 'https://randomuser.me/api/portraits/men/85.jpg',
                    sub: "as a front-end-developer",
                    insert: true
                },
                {
                    name: "Paul",
                    icon: 'mdi-plus',
                    img: 'https://randomuser.me/api/portraits/men/85.jpg',
                    sub: "as a front-end-developer",
                
                },
            ]
        }
    }
}
</script>