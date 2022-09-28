<template>
    <v-container>
        <h2 class="grey lighten-5 pa-5">Registration</h2>
        <BaseForm :registrationForm='registrationForm' />
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