<template>
  <v-container color="gray">
    <!-- header -->
    <v-row >
      <!-- <div class="grey lighten-5"> -->
      <v-col cols="6" md="4" sm="6" lg="4">
        <h3 class="mt-2">Dashboard</h3>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="6" md="4" sm="6" lg="4">
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
    
    </v-row>

    <div class="my-2">
      <DashCard />
    </div>
    
    <!-- chart -->
    <v-row class="my-2">
      <v-col cols="6" xs="12" md="8" lg="8" sm="12">
        <AreaChart />
      </v-col>
      <v-col  cols="6" xs="12" md="4" lg="4" sm="12">
        <Donut />
      </v-col>
    </v-row>
 
 <!-- timeline -->
    <v-row class="my-2">
      <v-col cols="12" md="6" lg="6" sm="12">
        <CardList/>
      </v-col>
      <v-col cols="12" md="6" lg="6" sm="12">
        <TimeLine />
      </v-col>
    </v-row>
<!-- table -->
    <div>
      <ItemData />
    </div>

  </v-container>
</template>

<script>
import ItemData from '@/components/ItemData.vue';
import Donut from '@/components/Donut.vue';
import AreaChart from '@/components/AreaChart.vue';
import DashCard from '@/components/DashCard.vue';
import TimeLine from '@/components/TimeLine.vue';
import CardList from '@/components/CardList.vue';


export default {
  data() {
    return {
      items: [
        {
          text: "Dashboard",
          icon: "mdi-view-dashboard",

        },
        {
          text: "Email",
          lists: [{ name: 'Inbox', icon: 'mdi-inbox' }, { name: 'Email Compose', icon: 'mdi-email-edit' },],
          icon: "mdi-email-newsletter",
        },

        {
          text: "Calender",
          icon: "mdi-calendar-month-outline",
        },
        {
          text: "Page",
          icon: "mdi-page-previous",
          ists: [{ name: 'Pricing', icon: 'mdi-currency-usd' }, { name: 'Invoice', icon: 'mdi-receipt-text' }, { name: 'Login', icon: 'mdi-login' }, { name: 'Register', icon: 'mdi-account-plus' },],

        },
      ],

    }
  },
  components: {
    ItemData,
    Donut,
    AreaChart,
    DashCard,
    TimeLine,
    CardList
}
}
</script>
