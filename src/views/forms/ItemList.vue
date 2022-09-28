<template>
    <v-container>

        <!-- <v-row align="center" justify="center">
            <v-col cols="12">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 12 : 2" class="mx-auto" height="350" max-width="350">
                        <v-card-text class="my-4 text-center text-h6">
                            Hover over me!
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>

        </v-row> -->
        <!-- class binding -->
        <v-row>
            <v-col>
                <!-- <div :class="[isactive ? info : org]"><b>{{title}}</b></div> -->

                <v-carousel :cycle="cycle" hide-delimiter-background delimiter-icon="mdi-minus" :show-arrows="true"
                    :continuous="true">
                    <v-carousel-item v-for="(item,i) in pictures" :key="i" :src="item.src"
                        reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
                </v-carousel>

            </v-col>
        </v-row>


        <v-row>
            <v-col>

                <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                    <v-hover v-slot="{ hover }">
                        <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png">
                            <v-expand-transition>
                                <div v-if="hover"
                                    class="d-flex justify-center align-center transition-fast-in-fast-out orange darken-4  text-h2 white--text"
                                    style="height: 100%;">
                                    $14.99
                                </div>
                            </v-expand-transition>
                        </v-img>
                    </v-hover>
                    <v-card-text class="pt-6" style="position: relative;">
                        <v-btn absolute color="orange" class="white--text" fab large right top>
                            <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <div class="font-weight-light grey--text text-h6 mb-2">
                            For the perfect meal
                        </div>
                        <h3 class="text-h4 font-weight-light orange--text mb-2">
                            QW cooking utensils
                        </h3>
                        <div class="font-weight-light text-h6 mb-2">
                            Our Vintage kitchen utensils delight any chef.<br>
                            Made of bamboo by hand
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-rating v-model="rating" half-increments  background-color="black" color="orange">

                        </v-rating>
                    </v-card-actions>
                </v-card>

            </v-col>
        </v-row>


        <v-row align="center" justify="space-around">


            <v-btn color="orange" class="white--text" fab large>
                <v-icon>mdi-cart</v-icon>
            </v-btn>

            <v-btn color="orange" class="white--text" large right top>
                <v-icon>mdi-cart</v-icon>
            </v-btn>

            <v-btn color="orange" class="white--text" outlined large right top>
                <v-icon>mdi-cart</v-icon>
            </v-btn>

            <v-btn color="orange" class="white--text" fab large right top>
                <v-icon>mdi-cart</v-icon>
            </v-btn>

            <v-btn color="orange" class="white--text" fab large right top>
                <v-icon>mdi-cart</v-icon>
            </v-btn>

            <v-btn color="orange" class="white--text" fab large right top>
                <v-icon>mdi-cart</v-icon>
            </v-btn>


        </v-row>

        <v-row>
            <v-card>
                <v-card-title class="indigo white--text text-h5">
                    User Directory
                </v-card-title>
                <v-row class="pa-4" justify="space-between">
                    <v-col cols="5">
                        <v-treeview :active.sync="active" :items="items" :load-children="fetchUsers" :open.sync="open"
                            activatable color="warning" open-on-click transition>
                            <template v-slot:prepend="{ item }">
                                <v-icon v-if="!item.children">
                                    mdi-account
                                </v-icon>
                            </template>
                        </v-treeview>
                    </v-col>

                    <v-divider vertical></v-divider>

                    <v-col class="d-flex text-center">
                        <v-scroll-y-transition mode="out-in">
                            <div v-if="!selected" class="text-h6 grey--text text--lighten-1 font-weight-light"
                                style="align-self: center;">
                                Select a User
                            </div>
                            <v-card v-else :key="selected.id" class="pt-6 mx-auto" flat max-width="400">
                                <v-card-text>
                                    <v-avatar v-if="avatar" size="88">
                                        <v-img :src="`https://avataaars.io/${avatar}`" class="mb-6"></v-img>
                                    </v-avatar>
                                    <h3 class="text-h5 mb-2">
                                        {{ selected.name }}
                                    </h3>
                                    <div class="blue--text mb-2">
                                        {{ selected.email }}
                                    </div>
                                    <div class="blue--text subheading font-weight-bold">
                                        {{ selected.username }}
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-row class="text-left" tag="v-card-text">
                                    <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                                        Company:
                                    </v-col>
                                    <v-col>{{ selected.company.name }}</v-col>
                                    <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                                        Website:
                                    </v-col>
                                    <v-col>
                                        <a :href="`//${selected.website}`" target="_blank">{{ selected.website }}</a>
                                    </v-col>
                                    <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                                        Phone:
                                    </v-col>
                                    <v-col>{{ selected.phone }}</v-col>
                                </v-row>
                            </v-card>
                        </v-scroll-y-transition>
                    </v-col>
                </v-row>
            </v-card>
        </v-row>


    </v-container>
</template>

<script>
const avatars = [
    '?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban',
    '?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun',
    '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong',
    '?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair',
    '?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly',
]

const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

export default {
    data() {
        return {

            // title: "CLASS BINDING",
            // isactive: false,
            // info: 'pink',
            // org: 'purple ',

            rating:4.2,

            cycle: true,
            pictures: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],

            active: [],
            avatar: null,
            open: [],
            users: [],
        }

    },
    computed: {
        items() {
            return [
                {
                    name: 'Users',
                    children: this.users,
                },
            ]
        },
        selected() {
            if (!this.active.length) return undefined

            const id = this.active[0]

            return this.users.find(user => user.id === id)
        },
    },

    watch: {
        selected: 'randomAvatar',
    },

    methods: {
        async fetchUsers(item) {
            // Remove in 6 months and say
            // you've made optimizations! :)
            await pause(1500)

            return fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(json => (item.children.push(...json)))
                .catch(err => console.warn(err))
        },
        randomAvatar() {
            this.avatar = avatars[Math.floor(Math.random() * avatars.length)]
        },
    },
}
</script>

<style>
.active {
    color: red;
}
</style>