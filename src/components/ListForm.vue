<template>
    <v-container>
        <div>
            <v-card class="w-full h-full">
                <v-list v-for="emp in listForm" :key="emp.id">

                    <v-list-item>
                        <v-list-item-title class="text-black">{{emp.name}}</v-list-item-title>
                        <v-list-item-subtitle class="text-black">{{emp.des}}</v-list-item-subtitle>
                        <v-btn class="mx-2" @click="editEmp(emp)">
                            {{editing ? 'update' : 'edit'}}
                        </v-btn>
                        <v-btn color="red" class="white--text" @click="deleteEmp(emp.id)">
                            delete
                        </v-btn>
                    </v-list-item>

                </v-list>
            </v-card>
        </div>
    </v-container>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {

    data() {
        return {
          
                name: '',
                des: '',

         
            editing: false,

        }
    },
    computed: {
        ...mapGetters('emp', {
            listForm: 'allEmployers',

        })
    },
    methods: {

        ...mapActions('emp', { deleteEmp: 'deleteEmp', updateEmp: 'updateEmp' }),
        editEmp(emp) {
            this.editing = this.editing == true ? false : true;
            if (this.editing) {
                this.name = emp.name;
                this.des = emp.des;
                this.updateEmp(emp)
            } else {
                emp.name = this.name;
                emp.des = this.des;
            }
        },
    }


}
</script>