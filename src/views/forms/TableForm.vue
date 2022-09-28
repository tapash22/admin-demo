<template>

    <v-container>
        <h2 class="d-flax justify-center">table form</h2>

        <v-switch v-model="singleExpand" label="Single Expand" />
        <v-data-iterator :items="desserts" item-key="name" :single-expand="singleExpand" hide-default-footer
            :items-per-page="4">

            <template v-slot:default="{items, isExpanded,expand}">
                <v-row>
                    <v-col cols="12" sm="12" lg="3" md="3" v-for="item in items" :key="item.name">
                        <v-card>
                            <v-card-title>
                                {{item.name}}
                            </v-card-title>
      
                            <v-switch :input-value="isExpanded(item)" :label="isExpanded(item) ? 'Expanded' : 'Closed'"
                                class="pl-4 mt-0" @change="(v) => expand(item, v)"></v-switch>
                            <v-divider></v-divider>

                            <v-list v-if="isExpanded(item)" dense>
                                <v-list-item>
                                    <v-list-item-content>
                                        calories
                                    </v-list-item-content>
                                    <v-list-item-content>
                                        {{item.calories}}
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        fat
                                    </v-list-item-content>
                                    <v-list-item-content>
                                        {{item.fat}}
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        carbs
                                    </v-list-item-content>
                                    <v-list-item-content>
                                        {{item.carbs}}
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        protein
                                    </v-list-item-content>
                                    <v-list-item-content>
                                        {{item.protein}}
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        sodium
                                    </v-list-item-content>
                                    <v-list-item-content>
                                        {{item.sodium}}
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>
            </template>

        </v-data-iterator>


    </v-container>
</template>

<script>
export default {
    data() {
        return {
            singleExpand: false,

            desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    sodium: 87,
                    calcium: '14%',
                    iron: '1%',
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    sodium: 129,
                    calcium: '8%',
                    iron: '1%',
                },
                {
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    sodium: 337,
                    calcium: '6%',
                    iron: '7%',
                },
                {
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    sodium: 413,
                    calcium: '3%',
                    iron: '8%',
                },
            ],
        }
    }
}
</script>