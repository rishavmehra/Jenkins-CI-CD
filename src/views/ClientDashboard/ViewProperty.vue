<template>
  <div>
      <v-toolbar class="blue darken-3" dark>
        <v-btn depressed icon @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <div class="title">{{property.title}}</div>
        <v-spacer></v-spacer>
      </v-toolbar>

      <div class="">
          <v-card class="rounded-lg" elevation="1">
              <v-simple-table>
                  <template v-slot:default>
                      <tbody>
                        <tr><td><strong>Size:</strong></td><td>{{property.size}}</td></tr>
                        <tr><td><strong>Unit No.:</strong></td><td>{{property.unit}}</td></tr>
                        <tr><td><strong>Floor:</strong></td><td>{{property.floor}}</td></tr>
                        <tr><td><strong>Location:</strong></td><td>{{property.location}}</td></tr>
                        <tr><td><strong>Balance:</strong></td><td>{{property.balance}}</td></tr>
                        <tr><td><strong>Payment Received:</strong></td><td>{{property.paymentreceived}}</td></tr>
                        <tr><td><strong>Allotment Price:</strong></td><td>{{property.allotmentvalue}}</td></tr>
                      </tbody>
                  </template>
              </v-simple-table>
          </v-card>

          <!-- Allotment + Charges + Taxes -->
          <v-card class="mt-4">
              <v-toolbar class="blue darken-3" dense dark>
                  <div>Allotment + Charges :</div>
              </v-toolbar>
              <v-simple-table>
                  <template v-slot:default>
                  <thead>
                      <tr>
                          <th class="text-left">Charge</th>
                          <th class="text-left">Amount</th>
                          <th class="text-left">GST</th>
                          <th class="text-left">Tax</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="allotment in property.allotments" :key="allotment.id">
                          <td>{{ allotment.title }}</td>
                          <td>{{ allotment.amount }}</td>
                          <td>{{ allotment.percentage }}%</td>
                          <td>{{ allotment.tax }}</td>
                      </tr>
                  </tbody>
                  </template>
              </v-simple-table>
          </v-card>

          <!-- Payments Received -->
          <v-card class="mt-4 rounded-lg">
            <v-toolbar class="blue darken-3" dense dark>
                <div>Payment Plans</div>
            </v-toolbar>     

            <v-card v-for="payment in property.payments" :key="payment.id" class="mb-2">
              <v-card-text>
                  <div class="d-flex">
                      <strong>Title</strong>
                      <v-spacer></v-spacer>
                      <div>{{payment.title}}</div>
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex">
                      <strong>Due Date</strong>
                      <v-spacer></v-spacer>
                      <div>{{payment.due_date}}</div>
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex">
                      <strong>Amount Received</strong>
                      <v-spacer></v-spacer>
                      <div>{{payment.amount}}</div>
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex">
                      <strong>Received Date</strong>
                      <v-spacer></v-spacer>
                      <div>{{payment.received_date}}</div>
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex">
                      <strong>Notes</strong>
                      <v-spacer></v-spacer>
                      <div>{{payment.notes}}</div>
                  </div>
              </v-card-text>
            </v-card>
          </v-card>

          <!-- All Applicant List -->
          <v-row>
          <v-col cols="12">
              <v-card class="mt-4 rounded-lg">
                  <v-toolbar flat>
                      <v-toolbar-title>Applicants</v-toolbar-title>
                  </v-toolbar>
                  <v-expansion-panels>
                      <v-expansion-panel v-if="applicantOneDetails.name !== null">
                          <v-expansion-panel-header>{{applicantOneDetails.name}}</v-expansion-panel-header>
                          <v-expansion-panel-content>
                              <v-simple-table dense>
                                  <tbody>
                                      <tr><td><strong>Name:</strong></td><td>{{applicantOneDetails.name}}</td></tr>
                                      <tr><td><strong>Email:</strong></td><td>{{applicantOneDetails.email}}</td></tr>
                                      <tr><td><strong>DOB:</strong></td><td>{{applicantOneDetails.dob}}</td></tr>
                                      <tr><td><strong>PAN No.:</strong></td><td>{{applicantOneDetails.pan}}</td></tr>
                                      <tr><td><strong>Profession:</strong></td><td>{{applicantOneDetails.professsion}}</td></tr>
                                      <tr><td><strong>Aadhar No.:</strong></td><td>{{applicantOneDetails.aadhar}}</td></tr>
                                  </tbody>
                              </v-simple-table>
                          </v-expansion-panel-content>
                      </v-expansion-panel>
                      <v-expansion-panel v-if="applicantTwoDetails.name !== null">
                          <v-expansion-panel-header>{{applicantTwoDetails.name}}</v-expansion-panel-header>
                          <v-expansion-panel-content>
                              <v-simple-table dense>
                                  <tbody>
                                      <tr><td><strong>Name:</strong></td><td>{{applicantTwoDetails.name}}</td></tr>
                                      <tr><td><strong>Email:</strong></td><td>{{applicantTwoDetails.email}}</td></tr>
                                      <tr><td><strong>DOB:</strong></td><td>{{applicantTwoDetails.dob}}</td></tr>
                                      <tr><td><strong>PAN No.:</strong></td><td>{{applicantTwoDetails.pan}}</td></tr>
                                      <tr><td><strong>Profession:</strong></td><td>{{applicantTwoDetails.professsion}}</td></tr>
                                      <tr><td><strong>Aadhar No.:</strong></td><td>{{applicantTwoDetails.aadhar}}</td></tr>
                                  </tbody>
                              </v-simple-table>
                          </v-expansion-panel-content>
                      </v-expansion-panel>
                      <v-expansion-panel v-if="applicantThreeDetails.name !== null ">
                          <v-expansion-panel-header>{{applicantThreeDetails.name}}</v-expansion-panel-header>
                          <v-expansion-panel-content>
                              <v-simple-table dense>
                                  <tbody>
                                      <tr><td><strong>Name:</strong></td><td>{{applicantThreeDetails.name}}</td></tr>
                                      <tr><td><strong>Email:</strong></td><td>{{applicantThreeDetails.email}}</td></tr>
                                      <tr><td><strong>DOB:</strong></td><td>{{applicantThreeDetails.dob}}</td></tr>
                                      <tr><td><strong>PAN No.:</strong></td><td>{{applicantThreeDetails.pan}}</td></tr>
                                      <tr><td><strong>Profession:</strong></td><td>{{applicantThreeDetails.professsion}}</td></tr>
                                      <tr><td><strong>Aadhar No.:</strong></td><td>{{applicantThreeDetails.aadhar}}</td></tr>
                                  </tbody>
                              </v-simple-table>
                          </v-expansion-panel-content>
                      </v-expansion-panel>
                  </v-expansion-panels>
              </v-card>
          </v-col>
          </v-row>

          <!-- Documents -->
          <v-card class="rounded-lg mt-4" outlined>
              <v-card-subtitle class="py-2 font-weight-bold">Documents</v-card-subtitle>
              <v-card-text class="px-2">
                  <v-row no-gutters>
                      <v-col v-for="pdf in property.documents" :key="pdf.id" cols="12" class="pa-1">
                          <!-- <v-dialog
                              v-model="dialog"
                              fullscreen
                              hide-overlay
                              transition="dialog-bottom-transition"
                          >
                              <template v-slot:activator="{ on, attrs }">
                                  <v-btn class="pa-2 d-flex flex-row align-center" outlined v-bind="attrs" v-on="on" text>
                                      <v-icon color="grey darken-2">mdi-file-document-outline</v-icon>
                                      <div class="caption text-capitalize">{{pdf.image}}</div>
                                  </v-btn>
                              </template>
                              <v-card>
                                  <v-toolbar dark color="primary">
                                      <v-btn icon dark @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
                                      <v-spacer></v-spacer>
                                      <v-toolbar-items><v-btn dark text @click="dialog = false">Save</v-btn></v-toolbar-items>
                                  </v-toolbar>

                                  <iframe :src="`https://realtsafe-test.s3.ap-south-1.amazonaws.com/Property/${pdf.image}`" frameborder="0" id="iframePdf" height="100%" width="100%"></iframe>
                                  
                              </v-card>
                          </v-dialog> -->

                          <v-btn block class="text-capitalize text-center" @click="dialog = !dialog">{{pdf.image}}</v-btn>

                          <!-- preview -->
                          <v-dialog
                            v-model="dialog"
                            scrollable
                          >
                            <v-card>
                              <pdf :src="`https://realtsafe-test.s3.ap-south-1.amazonaws.com/Property/${pdf.image}`"></pdf>
                            </v-card>
                          </v-dialog>
                      </v-col>
                  </v-row>
              </v-card-text>
          </v-card>

          <!-- Image Gallery -->
          <v-card class="rounded-lg mt-4" outlined>
              <v-card-subtitle class="py-2 font-weight-bold">Image Gallery</v-card-subtitle>
              <v-card-text class="px-2 myGallery">
                  <div v-for="gallery in property.images" :key="gallery.id">
                      <img v-img:group :src="`https://realtsafe-test.s3.ap-south-1.amazonaws.com/Property/${gallery.image}`" class="singleImage">
                  </div>
              </v-card-text>
          </v-card>

      </div>
  </div>
</template>

<script>
import Client from '../../Apis/Client'
import pdf from 'vue-pdf'

export default {
  name: 'ViewProperty',
  components: { pdf },
  data() {
    return {
      property: '',
      dialog: false,
      applicantOneDetails: null,
      applicantTwoDetails: null,
      applicantThreeDetails: null,
    };
  },
  beforeMount() {
    Client.singleClientProperty(this.$route.params.id).then(response => {
      this.property = response.data
      this.applicantOneDetails = JSON.parse(response.data.applicant_one)
      this.applicantTwoDetails = JSON.parse(response.data.applicant_two)
      this.applicantThreeDetails = JSON.parse(response.data.applicant_three)
    //   console.log(response.data)
    //   console.log(this.$route.params)
    })
  },
  methods:{}
};
</script>

<style scoped>
    .singleImage{
        width: 100%;
        border-radius: 12px;
        aspect-ratio: 1.4;
        object-fit:cover;
        box-shadow: 0px 2px 5px #dcdcdc;
    }
    .myGallery{
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    }
    #iframePdf{
        height: 100vh;
        width: 100vw;
    }
</style>