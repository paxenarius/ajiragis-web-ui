<template>
  <div
      id="e3"
      style="max-width: 400px; margin: auto;">
    <v-toolbar color="grey lighten-2">
      <v-icon>person</v-icon>
      <v-toolbar-title class="black--text">my Profile</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn style="margin: 0;" dark flat small color="blue darken-1">
        More
        <v-icon>arrow_forward</v-icon>
      </v-btn>
    </v-toolbar>
      <v-container
          style="min-height: 0; padding: 0 !important;">
        <v-layout row wrap>
          <v-flex xs12 style="padding-bottom: 0">
              <v-card-text>
                <div>
                  <span>Name: {{ dashboardData.my_profile.username }}</span>
                </div>
                <div>
                  <span>Last Sign On: {{ dashboardData.my_profile.last_login }}</span>
                </div>
                <div>
                  <span>Level: Silver</span>
                </div>
              </v-card-text>
              <!--<v-card-actions>-->
                <!--<v-spacer></v-spacer>-->

              <!--</v-card-actions>-->
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    data: () => ({
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }),
    props: {
      dashboardData: {
        type: Object,
        required: true,
        default: {
          "my_profile": {
              "username": "",
              "first_name": "",
              "last_name": "",
              "email": "",
              "last_login": ""
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
