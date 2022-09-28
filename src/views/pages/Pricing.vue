<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" lg="12">
                <p class="text-center text-body-1 pa-5 grey lighten-5 pa-8 rounded my-0 mx-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odit voluptates hic. Maiores quia tempora, sint, tenetur optio sequi natus corrupti delectus modi suscipit esse sunt aperiam doloremque necessitatibus tempore.
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="4" lg="4" sm="12" v-for="card in cards" :key="card.title">
                <v-card :color="card.color">
                    <v-card-title class="d-flex justify-center white--text">
                        {{card.title}}
                    </v-card-title>
                    <v-img :src="card.img"></v-img>
                    <v-card-text>
                        <h2 class="white--text text-center mb-5">{{card.amount}}</h2>
                        <p class="white--text text-center">{{card.percentage}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn block  color="red white--text">
                            Action
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="12" sm="12" lg="12">
                <p class="text-center text-body-1 pa-5 grey lighten-5 pa-8 rounded my-0 mx-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odit voluptates hic. Maiores quia tempora, sint, tenetur optio sequi natus corrupti delectus modi suscipit esse sunt aperiam doloremque necessitatibus tempore.
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    title: "Active Session",
                    amount: '2,222',
                    img:require('@/assets/img-1.jpg'),
                    color: 'deep-purple',
                    percentage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt atque non vitae consequatur, architecto provident laudantium, aliquam doloribus ratione corrupti ab quidem ipsum optio, libero ducimus natus esse molestias!'

                },
                {
                    title: "Total Revenue",
                    amount: '2,222',
                    img:require('@/assets/img-2.jpg'),
                    color: 'indigo',
                    percentage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt atque non vitae consequatur, architecto provident laudantium, aliquam doloribus ratione corrupti ab quidem ipsum optio, libero ducimus natus esse molestias!'
                },
                {
                    title: "Total Price",
                    amount: '2,222',
                    img:require('@/assets/img-3.jpg'),
                    color: 'purple',
                    percentage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt atque non vitae consequatur, architecto provident laudantium, aliquam doloribus ratione corrupti ab quidem ipsum optio, libero ducimus natus esse molestias!'
                }
            ]
        }
    }
}
</script>