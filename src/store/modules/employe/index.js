export default{
    namespaced:true,
    state(){
        return{
            employes:[
                {id: 1, name: "tapash", des: "this is my first project"},
                {id: 2, name: "paul", des: "this is my first vuex"}
              ],
              employers:[],
        }
    },
    getters:{
        allEmployers: (state) => state.employers,
        allemployes: (state) => state.employes,

    },
    actions:{
        addEmploye({commit},employe){
            commit('add_employe',employe);
        },
        deleteEmp({commit},id){
            commit('delete_emp',id);
        },
        updateEmp({commit},employe){
            commit('update_emp',employe);
        }
    },
    mutations:{
        add_employe(state,employe){
            state.employes.push(employe);
            state.employers = state.employes;  
        },
        delete_emp(state,id){
            state.employes = state.employes.filter((emp)=> emp.id != id);
            state.employers=state.employes;
        },
        update_emp(state,employe){
            let index = state.employes.findIndex((t)=>t.id == employe.id);
            if(index != -1){
                state.employes[index]= employe;
                console.log(employe);
            }
        }
    }

}