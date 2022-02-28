<template>
    <Layout>
        <v-card class="mb-4 pa-4" outlined>
            My Agents ({{agents.length}})
        </v-card>

        <v-card class="mb-4 rounded-lg" v-for="agent in agents" :key="agent.id">
            <v-row>
                <v-col>
                    <v-img
                        :src="agent.agent.brand_logo"
                        :lazy-src="agent.agent.brand_logo"
                        width="140"
                    ></v-img>
                </v-col>
                <v-col>
                    <v-card-title class="grey--text text--darken-3">
                        {{agent.agent.name}}
                    </v-card-title>
                    <v-card-subtitle>{{agent.agent.contact}}</v-card-subtitle>
                </v-col>
            </v-row>
        </v-card>

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
            agents: []
        };
    },
    created() {
        Client.clientConnectAgents().then((response) => {
            this.agents = response.data;
            console.log(response.data)
        });
    },
};
</script>

<style>

</style>