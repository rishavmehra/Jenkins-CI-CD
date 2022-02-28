<template>
    <Layout>
        <v-row>
            <v-col>
                <v-card class="mb-5">
                    <v-carousel hide-delimiters height="280">
                        <v-carousel-item
                          v-for="(item,i) in updates"
                          :key="i"
                          :src="`https://realtsafe-test.s3.ap-south-1.amazonaws.com/Updates/${item.image}`"
                        ></v-carousel-item>
                    </v-carousel>
                </v-card>

                <!-- Notified -->
                <v-dialog v-model="dialog">
                    <v-card>
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                        ></v-img>
                    </v-card>
                </v-dialog>
                <!-- Notified Ends -->

                <router-link :to="{name: 'ClientMyProperty'}">
                    <v-card class="mb-5 rounded-lg">
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <v-card-text>
                                <v-card-subtitle class="text-uppercase">My Properties</v-card-subtitle>
                                <v-card-title class="text-h3">{{properties.length}}</v-card-title>
                            </v-card-text>
                            <v-img src="../../assets/img/propeties.png" width="200"></v-img>
                        </div>
                    </v-card>
                </router-link>

                <router-link :to="{name: 'ClientMyAgents'}">
                    <v-card class="mb-5 rounded-lg">
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <v-card-text>
                                <v-card-subtitle class="text-uppercase">My Agents</v-card-subtitle>
                                <v-card-title class="text-h3">{{agents.length}}</v-card-title>
                            </v-card-text>
                            <v-img src="../../assets/img/agents.png" width="200"></v-img>
                        </div>
                    </v-card>
                </router-link>
            </v-col>
        </v-row>
    </Layout>
</template>

<script>
import Client from "../../Apis/Client";
import Layout from "../../Layouts/Layout.vue";

export default {
    components: { Layout },
    name: 'Property',

    data() {
        return {
            properties: [],
            agents: '',
            dialog: false,
            updates: []
        };
    },
    methods:{
        
    },
    mounted(){
        // runModalTimer() {
        //     setTimeout(() => {
        //         this.dialog = true
        //     }, 4000)
        // }
    },
    created() {
        /* Client.clientConnectAgents().then((response) => {
            this.agents = response.data;
        });
        Client.clientMyProperty().then((response) => {
            this.properties = response.data;
        });
        */
        Client.auth()
        .then((res) => {
            this.properties = res.data.properties
            this.agents = res.data.agents
            this.updates = res.data.updates
             //console.log(res.data)
        })
    },
};
</script>

<style>

</style>