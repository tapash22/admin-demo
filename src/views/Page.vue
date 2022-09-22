<template>
    <v-container>
        <v-row>
            <v-col cols="6" md="4" sm="6" lg="4">
                <h3 class="mt-2">Pages</h3>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="6" md="4" sm="6" lg="4">
                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-col>
        </v-row>
        <v-row>
            <router-view />
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            items: [
                {
                    text: 'Pricing',
                    path: 'pricing',
                },
                {
                    text: 'Chart',
                    path: 'chart',

                },
                {
                    text: 'Receipet',
                    path: 'receipt',
                }
            ],
        }
    }
}
</script>