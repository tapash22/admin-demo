<template>
    <v-container>
        <div class="w-full h-full bg-slate-100 block md:flex lg:flex justify-start">
            <div class="w-full md:w-1/3 lg:w-1/3 h-full md:max-h-fit bg-red-800 d-flex justify-center ">
                <div class="card border-2 my-5 mx-2">
                    <div class="card-header mx-auto d-flex justify-center">
                        <div class=" my-2 p-4">
                            <img class="w-32 h-32 rounded-full ring-2 ring-yellow-400 " src="@/assets/logo.png" />
                        </div>
                    </div>
                    <div class="card-body">
                        <h2 class="text-white font-mono font-black d-flex justify-center text-xl">Tapash paul</h2>
                        <ul class="d-block w-full h-auto p-5 border-b-2">
                            <li class="text-center text-white my-2 mx-auto" v-for="item in items" :key="item">
                                {{item}}
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer d-flex justify-center mx-5 my-2">
                        <p class="text-justify text-black ">
                            My name is Tapash paul. I'm from Tangail. I like to playing cricket, Badminton and also love
                            to traveling and introducing with new people and place.I like to browsing internet for
                            entertainment and new technology information and also like to test different kind of food.
                        </p>
                    </div>
                </div>
            </div>

            <div class="w-full md:w-2/3 lg:w-2/3 h-full bg-green-800 d-block px-2">
                <h2 class="d-flex justify-center text-center text-xl text-white my-2 bottom-2 border-b-2">Skills</h2>
                <div class="box w-full h-auto my-2 bg-white d-flex justify-start" v-for="skil in skills" :key="skil.id">
                    <div class="title w-1/3 my-auto h-auto">
                        <h4 class="text-black text-lg text-center ">{{skil.name}}</h4>
                    </div>
                    <v-divider vertical class="bg-black-500 " />
                    <ul class="des w-2/3 d-block mx-2">
                        <li class="pr-10 my-2" v-for=" title in skil.title" :key="title">{{title}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            items: ['Northern University Bangladesh', 'C.S.E.', 'Front-end-developer', 'Bio'],
            skills: [
                {
                    id: 1,
                    name: 'Basic',
                    title: [
                        'HTML', 'CSS','SCSS', 'Bootstrap', 'Tailwind CSS', 'Font-awesome',
                    ]
                },
                {
                    id: 2,
                    name: 'Vue.js',
                    title: [
                        'Components', 'Slot', 'Props', 'vuex', 'vue-router', 'axios', 'Vuetify', 'Metarial design icon', 'Bootstrap-vue'
                    ]
                },
                {
                    id: 3,
                    name: 'Package',
                    title: [
                        'npm','yarn'
                    ]
                }
            ]
        }
    }
}
</script>