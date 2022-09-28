<template>
    <v-row>
        <v-col cols="12" md="3" lg="3" sm="12" v-for="card in cards" :key="card.title">
            <v-card class="mx-auto" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="text-overline mb-4">
                            {{card.title}}
                        </div>
                        <v-list-item-title class="text-h4 mb-1">
                            {{card.amount}}
                        </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-avatar size="50" :color="card.color" rounded-circle>
                        <v-icon large color="white">{{card.icon}}</v-icon>
                    </v-list-item-avatar>
                </v-list-item>
                <v-card-text>
                    <v-progress-linear :color="card.color" rounded :value="card.percentage"></v-progress-linear>
                </v-card-text>
                <v-card-actions>
                    <p class="pl-5 text--primary" left>
                        Previous Period
                    </p>
                    <v-spacer></v-spacer>
                    <p right>{{card.percentage}}%</p>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    title: "Active Session",
                    amount: '2,222',
                    icon: 'mdi-card-multiple',
                    color: 'deep-purple',
                    percentage: 59

                },
                {
                    title: "Total Revenue",
                    amount: '2,222',
                    icon: 'mdi-animation',
                    color: 'indigo',
                    percentage: 69
                },
                {
                    title: "Total Price",
                    amount: '2,222',
                    icon: 'mdi-cash',
                    color: 'purple',
                    percentage: 79
                },
                {
                    title: "Add To Card",
                    amount: '2,222',
                    icon: 'mdi-credit-card-plus-outline',
                    color: 'blue',
                    percentage: 89
                },
            ]
        }
    }
}
</script>