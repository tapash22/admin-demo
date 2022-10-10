<template>
    <v-row>
        <v-col>
            <v-card>
                <v-card-title>

                </v-card-title>
                <v-card-text>
                    <v-form ref="form" lazy-validation>
                        <!-- v-model="valid" -->
                        <v-text-field dense outlined label="Name" v-model="registrationForm.name" :rules="nameRules" />

                        <v-text-field dense outlined label="Email" v-model="registrationForm.email"
                            :rules="emailRules" />

                        <v-file-input v-model="registrationForm.file" color="deep-purple accent-4" counter
                            label="Upload Image" multiple placeholder="Select your files" prepend-icon="mdi-paperclip"
                            outlined :show-size="1000">
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
                        <v-btn class="mx-2 my-2" depressed color="primary" type="submit">
                            send
                        </v-btn>
                        <v-btn color="error" class="mx-2 my-2" @click="submit">
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
// import DatePicker from 'vue2-datepicker';
// import 'vue2-datepicker/index.css';

export default {
    props: [
        "registrationForm"
    ],

    data() {
        return {
            registrationForm: {
                name: '',
                // nameRules: [
                //     v => !!v || 'Name is required',
                //     v => (v && v.length <= 10) || 'Name must be less than 10 characters',
                // ],
                email: '',
                // emailRules: [
                //     v => !!v || 'E-mail is required',
                //     v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                // ],
                file: '',
                des: '',
                // desRules: [
                //     v => !!v || 'description is required',
                //     v => (v && v.length >= 20) || 'Description must be more than 20 characters',
                // ],

            }

            // time2:'',

        }
    },
    components: {
        // DatePicker
    },
    methods: {
        submit(form) {
            // let data = { name: this.name, email: this.email, image: this.image, des: this.des };

            this.$emit("registerForm", this.registrationForm);
        },
        reset() {
            this.$refs.form.reset()
        },
    }
}
</script>