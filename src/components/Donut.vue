<template>
    <div id="chart" class="grey lighten-5 pa-5">
        <apexchart type="donut" height="600" :options="chartOptions" :series="series"></apexchart>
        <p class="my-5 font-h5 text-justify pa-5" colored-border>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, ipsa vitae e Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia laudantium tempora optio totam reprehenderit, perspiciatis</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            series: [44, 55, 41, 17, 15],
          chartOptions: {
            chart: {
              width: 380,
              type: 'donut',
            },
            plotOptions: {
              pie: {
                startAngle: -90,
                endAngle: 270
              }
            },
            dataLabels: {
              enabled: false
            },
            fill: {
              type: 'gradient',
            },
            legend: {
              formatter: function(val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex]
              }
            },
            title: {
              text: 'Donut Chart',
              

            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
        }
    }
}
</script>