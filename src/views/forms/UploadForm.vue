<template>
    <v-container>
        <h2 class="grey lighten-5 pa-5">Upload</h2>
        <BaseForm/>
    </v-container>
</template>

<script>
import BaseForm from './BaseForm.vue';

export default {
    data() {
        return {
            registrationForm: {
                name: '',
                email: '',
                file: '',
                description: ''
            }
        }
    },
    components: { BaseForm }
}
</script>