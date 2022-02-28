<template>
    <Layout>
        <v-card class="mb-4 pa-4" outlined>
            Total Property ({{properties.length}})
        </v-card>

        <v-card class="mb-4 rounded-lg" v-for="property in properties" :key="property.id">
            <router-link :to="{name: 'singleProperty', params:{id: property.id}}">
                <v-progress-linear
                    :value="property.paymentreceived / property.allotmentvalue * 100" 
                    :color="property.paymentreceived / property.allotmentvalue * 100 > 74 ? 'green' : 'red' " 
                    height="16"
                    striped
                    class="rounded-t-lg"
                >
                    <span class="caption font-weight-bold">{{(property.paymentreceived / property.allotmentvalue * 100).toFixed(2)}}%</span>
                </v-progress-linear>
                
                <v-card-title class="grey--text text--darken-3">
                    {{property.title}}
                </v-card-title>
                <v-card-subtitle class="grey--text text--darken-1">
                    Closing Date: {{property.date}}  -  By: {{property.agent.name}}
                </v-card-subtitle>

                <v-simple-table dense>
                    <template v-slot:default>
                        <tbody>
                            <tr><td>Size:</td><td>{{property.size}}</td></tr>
                            <tr><td>Unit No.:</td><td>{{property.unit}}</td></tr>
                            <tr><td>Floor:</td><td>{{property.floor}}</td></tr>
                            <tr><td>Location:</td><td>{{property.location}}</td></tr>
                            <tr><td>Allotment Price:</td><td>{{property.allotmentvalue}}</td></tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </router-link>
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
            properties: []
        };
    },
    created() {
        Client.clientMyProperty().then((response) => {
            this.properties = response.data;
            // console.log(response.data)
        });
    },
};
</script>

<style>

</style>