<template>
    <v-container>
        <div class="h-full w-full bg-orange-800 mx-auto">
            <h2 class="d-flex justify-center pt-3 font-black text-white">{{count}}</h2>
            <div class="d-flex justify-center">
                <button class=" bg-white text-black right-3 ring-lime-700 p-5"
                    @click="incrementCount()">increment</button>
            </div>
            <h3 class="my-3 text-center text-black">{{getTodoDone}}</h3>

            <div class="my-5 bg-yellow-700">
                <div class="pa-5 bg-white">
                    <FormInput />
                </div>
                <div>
                    <ListForm />
                </div>
            </div>

        </div>
    </v-container>


</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import FormInput from "@/components/FormInput.vue";
import ListForm from "@/components/ListForm.vue";


export default {
    data() {
        return {
            selectedId: 0,
            todos: "",
            name: "",
            des: "",
            done: false,
        };
    },
    computed: {
        ...mapState({
            count: (state) => state.counter.count,
            todoList: (state) => state.todos.todos,
            empList: (state) => state.emp.employe,
        }),
        ...mapGetters("todos", {
            getTodoDone: "getTodoDone",
            getDoneList: "getDoneList",
            selectedById: "getTodoById"
        })
    },
    methods: {
        ...mapActions("counter", {
            incrementCount: "actionB"
        }),
        onSelected(id) {
            this.selectedId = id;
            this.todos = this.selectedById(id);
        },
        addForm() {
        }
    },
    components: { FormInput, ListForm }
}
</script>