<template>
    <div>
        <v-form>
            <v-text-field dense v-model="name" label="name" />
            <v-textarea dense v-model="des" label="descripotion" />
            <v-btn class="rounded white--text" color="red" @click="addForm">
                send
            </v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:'',
            name:'',
            des:''
        }
    },
    methods:{
        addForm(){
            this.$store.dispatch('emp/addEmploye',{
                id:this.id,name:this.name,des:this.des
            });
           
        }
    }
}
</script>