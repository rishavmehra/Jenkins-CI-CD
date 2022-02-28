<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant="miniVariant"                   
            :clipped="clipped" 
            app
            class="white"
        >

          <v-list-item class="py-4"> 
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{client.name}}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{client.email}}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
              <v-list-item link :to="{name: 'ClientDashboard'}">
                <v-list-item-action>
                  <v-icon size="20" class="grey--text text--darken-3">mdi-view-dashboard-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="grey--text text--darken-3">Home</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link :to="{name: 'ClientMyProperty'}">
                <v-list-item-action>
                  <v-icon size="20" class="grey--text text--darken-3">mdi-office-building-marker-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="grey--text text--darken-3">My Properties</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link :to="{name: 'ClientMyAgents'}">
                <v-list-item-action>
                  <v-icon size="20" class="grey--text text--darken-3">mdi-account-tie</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="grey--text text--darken-3">My Agents</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link :to="{name: 'Profile'}">
                <v-list-item-action>
                  <v-icon size="20" class="grey--text text--darken-3">mdi-shield-account-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="grey--text text--darken-3">Profile</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              
          </v-list>

          <v-divider></v-divider>

          <v-list dense>
              <v-list-item link href="https://play.google.com/store/apps/details?id=com.agentsnest.app">
                <v-list-item-action><v-icon size="20" class="grey--text text--darken-3">mdi-star-outline</v-icon></v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="grey--text text--darken-3">Rate the app</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <template v-slot:append>
            <div class="pa-2">
              <v-btn block dark @click="logout">
                Logout
              </v-btn>
            </div>
          </template>

        </v-navigation-drawer>

        <v-app-bar :clipped-left="clipped" flat class="white" >
            <v-toolbar-title v-text="title" class="grey--text text--darken-4 font-weight-bold"/>
            <v-spacer />
            <v-btn @click.stop="drawer = !drawer" icon>
              <v-icon color="grey darken-4">mdi-view-grid-outline</v-icon>
            </v-btn>
        </v-app-bar>

    </div>
</template>

<script>
import Client from '../Apis/Client'

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'agnt.',
      client: {},
      isLoggedIn: false
    }
  },
  created(){
    Client.auth().then((response) => {
      this.client = response.data.auth
      //console.log(response.data)
    })
  },
  methods:{
    logout(){
      localStorage.removeItem("token");
      Client.logout().then(() => {
        localStorage.removeItem("token");
        this.isLoggedIn = false;
        this.$router.push({name: 'Login'});
      })
    }
  }
}
</script>

<style>

</style>