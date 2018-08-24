<template>
  <div>
    <div
        id="e3"

        class="grey lighten-3"
    >
      <v-toolbar light color="grey lighten-1">
        <v-toolbar-title>Contribute</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>help_outline</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card>

        <v-card-text primary-title>

          <v-layout row wrap>
            <v-flex xs12>
              <v-select
                  :items="languages"
                  v-model="contributionLanguage"
                  label="Select Language"
                  item-value="id"
                  item-text="name"
                  single-line
              ></v-select>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex xs12>
              <v-textarea
                v-model="text"
                label="Enter text in the language Selected"
                auto-grow
                required
              ></v-textarea>
            </v-flex>
          </v-layout>

        </v-card-text>

        <v-card-actions>
        <v-btn flat color="red" @click="done()">
          <v-icon color="red">
            clear
          </v-icon>
          Done
        </v-btn>
          <v-spacer></v-spacer>
        <v-btn flat color="blue" @click="next()">
          Next
          <v-icon color="blue">arrow_right_alt</v-icon>
        </v-btn>
        </v-card-actions>

      </v-card>
    </div>
  </div>

</template>

<script>
    import axios from '~/plugins/axios'

    let languageUrl = process.env.APIBaseUrl +'languages/';
    let translationUrl = process.env.APIBaseUrl + 'translations/';
    let contributionUrl =  process.env.APIBaseUrl + 'data-collect/contributions/';

    export default {
      name: 'mywork',
      data () {
        return {
          contributionLanguage: {},
          languages: [],
          text: null
        }
      },
      methods: {
        next () {
          var self = this;
          var contributionData = {
              language: self.contributionLanguage,
              text: self.text
          };
          axios.post(contributionUrl, contributionData)
          .then(function (response) {

          })
          .catch(function (error) {
            console.log(error);
          });
        },
        done () {
          this.$router.push({path: '/'})

        },
        getLanguages: function(){
          var self = this;
          axios.get(languageUrl)
          .then(function (response) {
            self.languages = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      },
      mounted: function () {
      this.getLanguages();

    }
    }
</script>

<style scoped>

</style>
