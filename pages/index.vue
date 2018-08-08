<template>
  <div>
    <div v-if="!$store.state.user">
      <div class="text-xs-center">
        <img src="/logo.png" alt="logo" class="logo" />
      </div>
      <login-form></login-form>
    </div>
    <v-container fluid grid-list-sm v-else>
      <v-layout row wrap>
        <v-flex>
          <work :dashboardData="dashboardData"></work>
        </v-flex>
        <v-flex>
          <v-card tile style="max-width: 400px" height="100%">
            <wallet :dashboardData="dashboardData"></wallet>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card tile style="max-width: 400px" height="100%">
            <profile :dashboardData="dashboardData"></profile>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex>
          <v-card tile>
            <notifications :dashboardData="dashboardData"></notifications>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>
  import Work from '~/components/Work'
  import Wallet from '~/components/Wallet'
  import Profile from '~/components/Profile'
  import Notifications from '~/components/Notifications'
  import LoginForm from '~/components/LoginForm'
  import ContributionForm from '~/components/data_collector/Contribute'
  import ContributionsList from '~/components/data_collector/ContributionsList'
  import axios from '~/plugins/axios'


  let dashboardURL = process.env.APIBaseUrl +'dashboard/';

  export default {
    name: 'main',
    data: () => ({
      dashboardData: {
          "my_work": {
            "translations_count": 0,
            "contribution_count": 0
          },
          "my_wallet": {
              "contribution_payment": 0,
              "translation_payment": 0
          },
          "my_profile": {
              "username": "",
              "first_name": "",
              "last_name": "",
              "email": ""
          },
          "notifications": []
      }
    }),
    components: {
      Work,
      Wallet,
      Profile,
      Notifications,
      LoginForm,
      ContributionForm,
      ContributionsList
    },
    methods: {
      getDashboard: function(){
        var self = this;
        axios.get(dashboardURL)
        .then(function (response) {
          self.dashboardData = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    mounted: function () {
      this.getDashboard();

    }
  }
</script>

<style scoped>

</style>
