<template>
  <v-container>
    <!-- header -->
    <v-row>
      <v-col cols="6" md="4" sm="6" lg="4">
        <h3 class="mt-2">Email</h3>
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
    <!-- Main -->
    <v-row>
      <v-col cols="12" md="3" lg="3" sm="4">
        <v-card>
          <div class="d-flex justify-center" dense>
            <v-btn class="my-5 " color="primary" @click="onClick()" large>Compose</v-btn>
          </div>

          <v-list dense>
            <h4 class="my-1 mx-5">My Email</h4>
            <v-list-item v-for="email in emails" :key="email.name" > 
              <v-list-item-icon >
                <v-icon :class="[isActives ? 'pink--text' :'purple--text']">
                  {{email.icon}}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{email.name}}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content class="">
                <v-list-item-subtitle class="text-right">{{email.amount}}</v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>

          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="9" lg="9" sm="8">
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isActives: true,
      emails: [
        {
          name: "Inbox",
          amount: 22,
          icon: 'mdi-tray-full',
          isActive: true
        },
        {
          name: "Sent",
          amount: 11,
          icon: 'mdi-navigation'
        },
        {
          name: "Starred",
          amount: 5,
          icon: 'mdi-star-outline'
        },
        {
          name: "Draft",
          amount: 4,
          icon: 'mdi-pencil'
        },
        {
          name: "Delete",
          amount: 2,
          icon: 'mdi-delete'
        },
      ],
      items: [
        {
          text: 'Inbox',
          path: 'inbox',
        },
        {
          text: 'EmailCompose',
          path: 'email-compose',
        }
      ],
    }
  },

  methods:{
    onClick(){
      this.$router.replace('/email/email-compose')
    }
  }
  // computed:{
  //   changeColor(){
  //     isActive:isActive ? 'red lighten-2-text':'purple lighten-1-text'
  //   }
  // }
}
</script>

<style>
.active {
  color: red-text;
}
</style>