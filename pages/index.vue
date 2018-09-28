<template>
  <div>
    <v-container fluid grid-list-sm>
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
  import axios from '~/plugins/axios'
  import Mgr from '~/services/security_service'

  let dashboardURL = process.env.APIBaseUrl + 'dashboard/'

export default {
    name: 'main',
    data: () => ({
      dashboardData: {
        'my_work': {
          'translations_count': 0,
          'contribution_count': 0
        },
        'my_wallet': {
          'contribution_payment': 0,
          'translation_payment': 0
        },
        'my_profile': {
          'username': '',
          'first_name': '',
          'last_name': '',
          'email': ''
        },
        'notifications': []
      },
      mgr: new Mgr(),
      user: null
    }),
    components: {
      Work,
      Wallet,
      Profile,
      Notifications,
      LoginForm
    },
    methods: {
      getDashboard: function () {
        var self = this
        axios.get(dashboardURL)
          .then(function (response) {
            self.dashboardData = response.data
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    mounted: function () {
      var self = this
      this.getDashboard()
      this.mgr.getUser2().then(function (user) {
        if (user == null) {
          self.$router.push('/login')
        } else {
          self.user = user
          console.log(user)
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
</script>

<style scoped>

</style>
