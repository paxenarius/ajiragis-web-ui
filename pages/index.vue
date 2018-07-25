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
          <work></work>
        </v-flex>
        <v-flex>
          <v-card tile style="max-width: 400px" height="100%">
            <wallet></wallet>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card tile style="max-width: 400px" height="100%">
            <profile></profile>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex>
          <v-card tile>
            <notifications></notifications>
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

  export default {
    components: {
      Work,
      Wallet,
      Profile,
      Notifications,
      LoginForm,
      ContributionForm,
      ContributionsList
    }
  }
</script>

<style scoped>

</style>
