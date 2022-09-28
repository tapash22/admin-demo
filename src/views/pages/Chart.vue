<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="12" lg="12" md="12">
                <div class="grey lighten-5 pa-5">
                    <apexchart type="line" height="230" :options="chartOptions" :series="series"></apexchart>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="12" lg="12" md="12">
                <div class="grey lighten-5 pa-5">
                    <DataIteration />
                </div>
            </v-col>
        </v-row>


    </v-container>
</template>

<script>
import DataIteration from '@/components/DataIteration.vue';

export default {
    data() {
        return {
            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Product Trends by Month',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                }
            },

        }
    },

    components: {
        DataIteration,
    }
}
</script>