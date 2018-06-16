<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex>
        <work></work>
      </v-flex>
      <v-flex>
        <wallet></wallet>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    import Work from '~/components/Work'
    import Wallet from '~/components/Wallet'
    export default {
      components: {
        Work,
        Wallet
      }
    }
</script>

<style scoped>

</style>