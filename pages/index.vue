<template>
  <v-container fluid grid-list-sm justify-start>
    <v-layout row wrap>
      <v-flex>
        <work></work>
      </v-flex>
      <v-flex>
        <wallet></wallet>
      </v-flex>
      <v-flex>
        <profile></profile>
      </v-flex>
    </v-layout>
  </v-container>
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