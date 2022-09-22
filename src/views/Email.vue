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
      <v-col cols="4" md="3" lg="3" sm="4">
        <v-card>
          <div d-flex justify-conent-center> <v-btn>Compose</v-btn></div>
          
          <v-list dense v-for="email in emails" :key="email.name">
            <v-list-item>
              <v-list-item-icon class="mx-5">
                <v-icon class="white--text indigo darken-3 rounded-circle">
                  {{email.icon}}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{email.name}}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-subtitle>{{email.amount}}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>

      </v-col>
      <v-col cols="8" md="9" lg="9" sm="8">
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      emails:[
        {
          name:"Inbox",
          amount:22,
          icon:'mdi-tray-full'
        },
        {
          name:"Sent",
          amount:22,
          icon:'mdi-tray-full'
        },
        {
          name:"Startd",
          amount:22,
          icon:'mdi-tray-full'
        },
        {
          name:"Draft",
          amount:22,
          icon:'mdi-tray-full'
        },
        {
          name:"Delete",
          amount:22,
          icon:'mdi-tray-full'
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
  }
}
</script>