<template>
  <div
      id="e3"
      style="max-width: 800px; margin: auto;"
      class="grey lighten-3"
  >
    <v-toolbar light color="grey lighten-1">
      <v-toolbar-title>Translate</v-toolbar-title>
      <v-spacer></v-spacer>
      100
      <v-btn icon>
        <v-icon>help_outline</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card>
      <v-card-text primary-title>
        <v-layout row wrap>
          <v-flex xs5>
            <v-select
                :items="items"
                v-model="e1"
                label="Select"
                single-line
            ></v-select>
          </v-flex>
          <v-flex xs2>
            <v-icon color="red">
              arrow_forward
            </v-icon>
          </v-flex>
          <v-flex xs5>
            <v-select
                :items="items"
                v-model="e2"
                label="Select"
                single-line
            ></v-select>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
    export default {
      name: 'mywork',
      data () {
        return {
          e1: null,
          e2: null,
          items: [
            { text: 'State 1' },
            { text: 'State 2' },
            { text: 'State 3' },
            { text: 'State 4' },
            { text: 'State 5' },
            { text: 'State 6' },
            { text: 'State 7' }
          ]
        }
      }
    }
</script>

<style scoped>

</style>