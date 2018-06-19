<template>
  <div style="max-width: 800px; margin: auto;">
    <div
        id="e3"

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
                  label="From"
                  single-line
              ></v-select>
            </v-flex>
            <v-flex  xs2>
              <v-card-text justify-center>
                <v-icon color="red">
                  arrow_forward
                </v-icon>
              </v-card-text>
            </v-flex>
            <v-flex xs5>
              <v-select
                  :items="items"
                  v-model="e2"
                  label="To"
                  single-line
              ></v-select>
            </v-flex>
          </v-layout>
          <h3 class="headline mb-0">
            Word or Sentence
          </h3>
          <v-text-field
              name="input-7-1"
              label="Type translation"
              multi-line
          ></v-text-field>
        </v-card-text>
        <!--<v-card-actions>-->
        <!--<v-btn flat color="orange">Share</v-btn>-->
        <!--<v-btn flat color="orange">Explore</v-btn>-->
        <!--</v-card-actions>-->
      </v-card>
    </div>
    <v-layout column>
      <v-flex mt-3 class="text-md-center" xs12>
        <h3>
          my Confidence Level
        </h3>
      </v-flex>
      <v-flex xs12>
        <!--todo start here-->
      </v-flex>
    </v-layout>
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