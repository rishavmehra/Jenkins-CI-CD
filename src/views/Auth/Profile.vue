<template>
  <Layout>
    <v-card flat>
      <div class="title text-center mt-5 text-uppercase">Profile</div>
      <div class="text-center mb-5 body-2 grey--text">Share you UID for make connection to agents</div>

      <v-card-text>
        <v-text-field
            label="Name"
            outlined
            v-model="client.name"
        ></v-text-field>
        <v-text-field
            label="Email"
            outlined
            v-model="client.email"
        ></v-text-field>
        <v-text-field
            label="UID"
            outlined
            v-model="client.uid"
        ></v-text-field>

        <v-btn 
          block large
          v-clipboard:copy="client.uid"
          v-clipboard:success="onCopy"
          class="white--text"
          :class="success == true ? 'gradient' : 'grey darken-4'"
        >{{submitBtnText}}</v-btn>

        <!-- <v-btn 
          block 
          large
          class="white--text"
          @click="saveDetails()"
          :class="success == true ? 'gradient' : 'grey darken-4'"
        >{{submitBtn}}</v-btn> -->
      </v-card-text>
    </v-card>

  </Layout>
</template>

<script>
import Layout from '../../Layouts/Layout.vue'
import Client from '../../Apis/Client'

export default {
  components: { Layout },
  data(){
    return{
      client:'',
      preview: '',
      submitBtnText: "Copy UID",
      success: false,
    }
  },
  methods: {
    onCopy: function () {
      this.success = true
      this.submitBtnText = 'UID Copied!'
    }
  },
  beforeMount(){
    Client.auth().then((response) => {
      this.client = response.data.data;
      // console.log(response)
    });
  }
}
</script>

<style scoped>
.brandLogoLabel{
  border: 1px solid #999999;
  border-radius: 4px;
  padding: 5px 12px;
  cursor: pointer;
  font-size: 14px
}
.gradient{
  background-image: linear-gradient(to right, #0ba360, #3cba92);
  box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
}
</style>