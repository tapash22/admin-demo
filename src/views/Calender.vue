<template>
  <v-container>
    <v-row class="w-full md:w-full lg:w-full h-screen my-auto">
      <v-col cols="12" md="6" lg="6" class="mx-auto bg-red-500 flex justify-center h-32 rounded">
        <datepicker class="my-auto" v-model="onSelected" range lang="en" first-day-of-week="sunday"
        circle multiCalendars multiCalendarsSolo :partialRange="true"  />
      </v-col>
      <v-col cols="12" md="6" lg="6" class="mx-auto">
        <datepicker v-model="onSelected" lang="en" confirm>
        </datepicker>
      </v-col>

    </v-row>
  </v-container>

</template>
  
<script>
export default {
  data() {
    return {
      onSelected: new Date(),
      tomorrow:new Date().getDate() + 1,
      red:'text-orange-800'
      //  customInputClass:[23,29,19]
    }
  },
  computed:{
    format (onSelected) {
            const day = onSelected.getDate();
            const month = onSelected.getMonth() + 1;
            const year = onSelected.getFullYear();

            return `Selected date is ${day}/${month}/${year}`;
        }
  }
}
</script>

<style scoped>
.red-color{
  color:red;
}
</style>