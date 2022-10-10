<template>
    <v-row>
        <v-col>
            <v-card>
                <v-card-title>
                    Upload Form
                </v-card-title>
                <v-card-text>
                    <v-form lazy-validation>
                        <!-- v-model="valid" -->
                        <v-text-field dense outlined label="Product Name" v-model="name" :rules="nameRules" />

                        <v-text-field dense outlined label="Price" v-model="price" :rules="priceRules" />
                        <v-text-field dense outlined label="Amount" v-model="amount" :rules="amountRules" />
                        <v-file-input v-model="file" color="deep-purple accent-4" counter label="Upload Image" multiple
                            placeholder="Select your files" prepend-icon="mdi-paperclip" outlined :show-size="1000">
                            <template v-slot:selection="{ index, text }">
                                <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>
                                    {{ text }}
                                </v-chip>

                                <span v-else-if="index === 2" class="text-overline grey--text text--darken-3 mx-2">
                                    +{{ files.length - 2 }} File(s)
                                </span>
                            </template>
                        </v-file-input>
                        <v-textarea v-model="des" :rules="desRules" placeholder="Description" auto-grow outlined
                            rows="5" row-height="25">
                        </v-textarea>
                        <!-- <DatePicker v-model="time2" /> -->

                        <!-- <v-card-actions class="mt-n8"> -->
                        <v-btn class="mx-2 my-2" depressed color="primary" @click="uploadForm">
                            send
                        </v-btn>
                        <v-btn color="error" class="mx-2 my-2" @click="reset">
                            <!-- @click="reset" -->
                            <v-icon>
                                mdi-cached
                            </v-icon>
                        </v-btn>
                    </v-form>
                </v-card-text>

                <!-- </v-card-actions> -->
            </v-card>
        </v-col>
    </v-row>
</template>


<script>

export default {
    data() {
        return {
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            price: '',
            priceRules: [
                v => !!v || 'Price is required',
                v => (v && v.length <= 6) || 'price must be ',
            ],
            amount: '',
            amountRules: [
                v => !!v || 'amount is required',
            ],
            file: '',
            des: '',
            desRules: [
                v => !!v || 'description is required',
                v => (v && v.length >= 40) || 'Description must be more than 20 characters',
            ],
        }
    },

    methods: {
        uploadForm() {
            let data = { name: this.name, price: this.price, amount: this.amount, file: this.file, des: this.des }
            console.log(data);
        },
        reset() {
            this.name = '',
                this.email = '',
                this.file = '',
                this.des = ''
        }

    }

}
</script>