<template>
  <div style="max-width: 800px; margin: auto;">
    <div
        id="e3"

        class="grey lighten-3"
    >
      <v-toolbar light color="grey lighten-1">
        <v-toolbar-title>Translate</v-toolbar-title>
        <v-spacer></v-spacer>
          {{points}}
        <v-btn icon>
          <v-icon>help_outline</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card>
        <v-card-text primary-title>
          <v-layout row wrap>
            <v-flex xs5>
              <v-select
                  :items="fromLanguages"
                  v-model="languageFrom"
                  label="From"
                  single-line
                  v-on:change="randomizeWord"
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
                  :items="toLanguages"
                  v-model="languageTo"
                  label="To"
                  single-line
              ></v-select>
            </v-flex>
          </v-layout>
          <h4 v-if="word">Translate the following word</h4>
          <h3 class="headline mb-0">
             <span class="blue--text">{{word}}</span>
          </h3>
          <v-text-field
              name="input-7-1"
              label="Translation"
              v-model="translation"
          ></v-text-field>
          <v-text-field
              name="input-7-1"
              label="Use it in a sentence"
              v-model="sentence"
              multi-line
          ></v-text-field>
          <v-select
              :items="items"
              v-model="partOfSpeech"
              label="Part of speech"
              single-line
          ></v-select>
          <v-layout row wrap>
            <v-flex xs11>
              <v-slider label="Confidence" v-model="confidence" color="blue"></v-slider>
            </v-flex>
            <v-flex xs1>
              <v-text-field v-model="confidence" type="number"></v-text-field>
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
    let randomWordsAPI = process.env.APIBaseUrl + 'words/?random=true&language=1';
    let translationUrl = process.env.APIBaseUrl + 'translations/';

    export default {
      name: 'mywork',
      data () {
        return {
          languageFrom: {},
          languageTo: {},
          partOfSpeech: null,
          confidence: 0,
          word: null,
          points: 0,
          translation: '',
          sentence: '',
          items: [
            { text: 'NOUN' },
            { text: 'VERB' },
            { text: 'ADJECTIVE' },
            { text: 'ADVERB' },
            { text: 'PRONOUN' },
            { text: 'PREPOSITION' },
            { text: 'INTERJECTION' },
            { text: 'CONJUNCTION' }
          ],
          fromLanguages: [],
          toLanguages: [],
        }
      },
      methods: {
        randomizeWord (language) {
          var self = this;
          axios.get(randomWordsAPI)
          .then(function (response) {
            self.word = response.data[0].word;
            self.wordDetails = response.data[0];
          })
          .catch(function (error) {
            console.log(error);
          });
        },
        next () {
          var self = this;
          var translationData = {
              word: self.wordDetails.id,
              translate_to: self.languageTo.id,
              translation: self.translation,
              example_sentence: self.sentence,
              confidence_level: self.confidence
          };
          axios.post(translationUrl, translationData)
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
            response.data.forEach(function (value) {
              value.text = value.name;
              self.fromLanguages.push(value);
              self.toLanguages.push(value);
            });
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      },
      watch: {
        watchLanguagesFrom: function (newVal) {
          this.randomizeWord(newVal)
        }
      },
      mounted: function () {
      this.getLanguages();

    }
    }
</script>

<style scoped>

</style>
