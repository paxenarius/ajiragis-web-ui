<template>
  <div>
    <v-container fluid grid-list-sm>
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
    </v-container>
  </div>

</template>

<script>
  import Work from '~/components/Work'
  import Wallet from '~/components/Wallet'
  import Profile from '~/components/Profile'

  export default {
    components: {
      Work,
      Wallet,
      Profile
    }
  }
</script>

<style scoped>

</style>