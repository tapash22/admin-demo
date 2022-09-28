<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
                <div class="grey lighten-5 ">
                    <v-card>
                        <v-card-title>
                            <v-text-field class="shrink" dense rounded v-model="searched" placeholder="search your mail"
                                single-line hide-details filled append-icon="mdi-magnify">
                            </v-text-field>
                            <v-spacer></v-spacer>
                            <v-btn icon filled>
                                <v-icon >
                                    mdi-delete
                                </v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-data-table v-model="selected" :headers="headers" :items="desserts" hide-default-header
                            item-key="name" show-select>
                        </v-data-table>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            searched: '',
            selected: [],
            desserts: [
                {
                    send_at: '2/12/21',
                    image: 4.0,
                    name: 'Tapash',
                    subject: 'cse',
                    description: 'this is my email',
                },
                {
                    send_at: '2/12/21',
                    image: 4.0,
                    name: 'paul',
                    subject: 'cse',
                    description: 'this is my email',
                },
                {
                    send_at: '2/12/21',
                    image: 4.0,
                    name: 'topon',
                    subject: 'cse',
                    description: 'this is my email',
                },
                {
                    send_at: '2/12/21',
                    image: 4.0,
                    name: 'surjo',
                    subject: 'cse',
                    description: 'this is my email',
                },
                {
                    send_at: '2/12/21',
                    image: 4.0,
                    name: 'romesh',
                    subject: 'cse',
                    description: 'this is my email',
                },
                {
                    send_at: '2/12/21',
                    image: 4.0,
                    name: 'roy',
                    subject: 'cse',
                    description: 'this is my email',
                },
            ],
            headers: [
                {
                    text: 'Date', align: 'start',
                    sortable: false, value: 'send_at'
                },

                { text: 'Image (g)', value: 'image' },
                { text: 'Name',value: 'name',},
                { text: 'Subject', value: 'subject' },
                { text: 'Description', value: 'description' },
            ],
        }
    }
}
</script>