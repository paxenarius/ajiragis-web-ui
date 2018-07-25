<template>
  <v-card tile style="max-width: 400px" height="100%">
    <v-toolbar color="grey lighten-2">
      <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
      <v-icon>devices</v-icon>
      <v-toolbar-title class="black--text">my Work</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn style="margin: 0;" dark small flat color="green" @click="work()">Work
        <v-icon>arrow_forward</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container>
      <v-layout row >
        <v-flex d-flex xs12 sm6 md4>
          <v-icon x-large color="green">bar_chart</v-icon>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap>
            <v-flex xs12 style="padding: 0;">
              <div class="headline grey--text text--darken-1">500</div>
            </v-flex>
            <v-flex xs12 style="padding: 0;">
              <span class="grey--text text--lighten-1">Translations</span>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <!--<v-card-actions>-->
      <!--<v-spacer></v-spacer>-->
      <!--<v-btn style="margin: 0;" dark flat color="green">Request Work</v-btn>-->
    <!--</v-card-actions>-->
  </v-card>
</template>

<script>
  export default {
    name: 'Work',
    data: () => ({
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }),
    methods: {
      work () {
        this.$router.push({path: 'translate'})
      }
    }
  }
</script>

<style scoped>

</style>
