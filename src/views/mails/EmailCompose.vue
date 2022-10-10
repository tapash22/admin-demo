<template>
    <v-container>
        <v-row>
            <v-col>
                <div>
                    <v-card>
                        <v-form lazy-validation>
                            <v-card-title>
                                <v-text-field placeholder="TO" v-model="email" :rules="emailRules" dense>
                                </v-text-field>
                            </v-card-title>
                            <v-card-subtitle>
                                <v-text-field placeholder="subject" dense v-model="sub" :rules="subRules">
                                </v-text-field>
                            </v-card-subtitle>
                            <v-card-text>
                                <!-- <v-textarea clearable clear-icon="mdi-close-circle" placeholder="Description" auto-grow
                                    outlined rows="5" row-height="35" v-model="des" :rules="desRules">
                                </v-textarea> -->
                            <VueEditor v-model="des"/>
                            </v-card-text>
                   
                            <v-card-actions class="mt-n8">
                                <v-btn class="mx-2 my-2" depressed color="primary" @click="onSubmit">
                                    send
                                </v-btn>

                            </v-card-actions>
                        </v-form>

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

            email: "",
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            sub: "",
            subRules: [
                v => !!v || 'subject is required'
            ],
            des: "",
            desRules: [
                v => !!v || 'subject is required',
                v => (v && v.length >= 20) || 'Messsge must be more then 20 characters'
            ],

        }
    },
    comments: {
 
    },
    methods: {
        onSubmit(form) {
            let data = { email: this.email, sub: this.sub, des: this.des };

            console.log(data);
        }
    }
}
</script>