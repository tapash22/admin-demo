<template>
    <v-container>
        <div class="h-screen w-full bg-orange-800 mx-auto">
            <h2 class="d-flex justify-center pt-3 font-black text-white">{{count}}</h2>
            <div class="d-flex justify-center">
                <button class=" bg-white text-black right-3 ring-lime-700 p-5"
                    @click="incrementCount()">increment</button>
            </div>
            <h3 class="my-3 text-center text-black">{{getTodoDone}}</h3>
            <div class="d-flex justify-center my-5 ">

                <div class="card w-30 h-auto bg-white p-3 m-2" v-for="todo in todoList" :key="todo.id">
                    <a href="#" @click="onSelected(todo.id)">
                        <div
                            class="card-title mx-auto w-14 h-14  text-black text-center py-4 mb-2 ring-2 ring-purple-300 rounded-full">
                            {{todo.name}}
                        </div>
                        <div class="card-body mx-auto p-4 bg-gray-800 text-white rounded-lg">
                            {{todo.des}}
                        </div>
                        <div class="card-footer d-flex justify-center py-3 text-black">
                            {{todo.done ? 'done' : 'not done'}}
                        </div>
                    </a>
                </div>
            </div>

            <div class="my-5 bg-green-300 h-38 w-full d-flex justify-around">
                <div class="w-52 h-32">
                    <ul class="my-5 w-full">
                        <li class="w-full d-flex p-4" v-for="dl in getDoneList" :key="dl.id">
                            {{dl.id}}-{{dl.name}}-{{dl.des}}-{{dl.done}}
                        </li>
                    </ul>
                </div>
                <v-divider vertical></v-divider>
                <div class="w-62 h-32 my-5">
                    <h3 class="d-flex justify-center text-white">Selected id</h3>
                    <ul class="w-full h-full" v-if="todos">
                        <li>{{todos.id}}</li>
                        <li>{{todos.name}}</li>
                        <li>{{todos.des}}</li>
                        <li>{{todos.done}}</li>
                    </ul>
                </div>

            </div>

            <div class="my-5 bg-slate-900 h-64 w-full d-flex justify-center">
                <table class="border-separate border-spacing-5 border border-slate-400 w-1/2 my-2">
                    <thead>
                        <tr>
                            <th class="border border-slate-300 text-white">State</th>
                            <th class="border border-slate-300 text-white">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-slate-300 text-white text-center font-mono">Indiana</td>
                            <td class="border border-slate-300 text-white text-center font-semibold">Indianapolis</td>
                        </tr>
                        <tr>
                            <td class="border border-slate-300 text-center text-white">Ohio</td>
                            <td class="border border-slate-300 text-center text-white">Columbus</td>
                        </tr>
                        <tr>
                            <td class="border border-slate-300 text-center text-white">Michigan</td>
                            <td class="border border-slate-300 text-center text-white">Detroit</td>
                        </tr>
                    </tbody>
                </table>
                <table class="border-collapse border border-slate-400 w-1/2 my-2 mx-1">
                    <thead>
                        <tr>
                            <th class="border border-slate-300 text-white">State</th>
                            <th class="border border-slate-300 text-white">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-slate-300 text-white text-center font-mono">Indiana</td>
                            <td class="border border-slate-300 text-white text-center font-semibold">Indianapolis</td>
                        </tr>
                        <tr>
                            <td class="border border-slate-300 text-center text-white">Ohio</td>
                            <td class="border border-slate-300 text-center text-white">Columbus</td>
                        </tr>
                        <tr>
                            <td class="border border-slate-300 text-center text-white">Michigan</td>
                            <td class="border border-slate-300 text-center text-white">Detroit</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="my-5 bg-teal-400 h-64 w-full d-flex justify-center">
                <button
                    class="bg-white h-20 mt-5 mr-5 transition transform hover:translate-y-5 motion-reduce:transition-none motion-reduce:hover:transform-none duration-1000 p-5">
                    Hover me
                </button>

                <button type="button" class="bg-indigo-500 h-20 mt-5 p-5">
                    <svg class="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24">
                    </svg>
                    Processing...
                </button>

                <!-- animate-ping -->
                <span class="flex h-22 w-22">
                    <span
                        class="animate-ping absolute inline-flex h-10 w-10 rounded-t-3xl bg-sky-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-5 w-5 bg-sky-500 ml-n4 mb-n5"></span>
                </span>
                <!-- motion-safe -->
                <button type="button" class="bg-indigo-600 ..." disabled>
                    <svg class="motion-safe:animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                        <!-- ... -->
                    </svg>
                    Processing
                </button>
                <!-- bounce -->
                <svg class="animate-bounce w-6 h-6 mt-5 ml-n20 mr-10 bg-stone-400">
                    <!-- ... -->
                </svg>

                <!-- animate-pulse -->
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full ">
                    <div class="animate-pulse flex space-x-4 w-30 ">
                        <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                        <div class="flex-1 space-y-6 py-1">
                            <div class="h-2 bg-slate-200 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-5 bg-indigo-600 h-64 w-full d-flex justify-start">
                <div class="rotate-45 w-32 my-5 bg-white">
                    tapash
                </div>
                <div class="rotate-12 w-32 my-5 bg-white">
                    tapash
                </div>
                <div class="rotate-90 w-32 my-5 bg-white">
                    tapash
                </div>
            </div>

        </div>
    </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            selectedId: 0,
            todos: '',
        }
    },
    computed: {
        ...mapState({
            count: (state) => state.counter.count,
            todoList: (state) => state.todos.todos,

        }),

        ...mapGetters('todos', {
            getTodoDone: 'getTodoDone',
            getDoneList: 'getDoneList',
            selectedById: 'getTodoById'
        })
    },

    methods: {

        ...mapActions('counter', {
            incrementCount: 'actionB'
        }),

        onSelected(id) {
            this.selectedId = id;
            this.todos = this.selectedById(id);
        }
    }
}
</script>