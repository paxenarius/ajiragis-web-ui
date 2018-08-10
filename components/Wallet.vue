<template>
  <div style="height: 100%">
    <v-toolbar color="grey lighten-2">
      <v-icon>business_center</v-icon>
      <v-toolbar-title class="black--text">my Wallet</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn style="margin: 0;"  flat dark small color="red">Manage
        <v-icon>arrow_forward</v-icon></v-btn>
    </v-toolbar>
    <v-container >
      <v-layout row>
        <v-flex d-flex xs12 sm6 md4>
          <v-icon x-large color="red">trending_up</v-icon>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap>
            <v-flex d-flex xs12 style="padding: 0;">
              <div class="headline grey--text text--darken-1">
                {{
                  dashboardData.my_wallet.contribution_payment +
                  dashboardData.my_wallet.translation_payment
                }}
              </div>
            </v-flex>
            <v-flex d-flex xs12 style="padding: 0;">
              <span class="grey--text text--lighten-1">Ajira Points</span>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <!--<v-card-actions>-->
      <!--<v-spacer></v-spacer>-->
      <!--<v-btn style="margin: 0;"  flat dark color="red">Manage</v-btn>-->
    <!--</v-card-actions>-->

  </div>
</template>

<script>
  export default {
    name: 'Wallet',
    data: () => ({
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }),
    props: {
      dashboardData: {
        type: Object,
        required: true,
        default: {
          "my_wallet": {
            "contribution_payment": 0,
            "translation_payment": 0
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
