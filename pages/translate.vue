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
            { text: 'Noun' },
            { text: 'Verb' },
            { text: 'Participle' },
            { text: 'Article' },
            { text: 'Pronoun' },
            { text: 'Preposition' },
            { text: 'Adverb' },
            { text: 'Conjunction' }
          ],
          fromLanguages: [
            {text: 'Kisii'},
            {text: 'Maasai'}
          ],
          toLanguages: [
            {text: 'English'},
            {text: 'Swahili'},
            {text: 'Gikuyu'},
            {text: 'Luo'}
          ],
          kisii: [
            'Inchu',
            'Genda',
            'Tara',
            'Minyoka',
            'Kwana',
            'Ogokwania',
            'Rika',
            'Tegerera',
            'Rigereria',
            'Abanto',
            'Omonto',
            'Omosacha',
            'Omokungu',
            'Omomura',
            'Omoiseke',
            'Tata',
            'Mama',
            'Endgera',
            'Okokima',
            'Chinyeni',
            'Enyama',
            'Omogati',
            'Echae',
            'Amache',
            'Amabere',
            'Obori/wimbi',
            'Ebituma',
            'Amarabwoni',
            'Abukato',
            'Omochere',
            'Abukato',
            'Amatoke',
            'Ebisukari',
            'Esukari',
            'Omonyo'
          ],
          maasai: [
            'Engatek/dukuya',
            'oliare',
            'Taisere',
            'Tataji',
            'Kewarrie',
            'Taisere',
            'Ermatunda',
            'Ermariko',
            'Enyanya',
            'Ermurungu',
            'Engitunguu',
            'Olodo',
            'Olonyori',
            'Embuse',
            'Oloiborr',
            'Olorok',
            'Olmuje',
            'Edaa E tedekanya',
            'EdaaE dama',
            'Edaa Nilo Airraje',
            'Kule',
            'arkahawa',
            'olmukate',
            'Etikinya',
            'Osiuo',
            'Enjan/ehaita',
            'Albarafu',
            'Erobi',
            'Erowua',
            'Alayeni'
          ]
        }
      },
      methods: {
        randomizeWord (language) {
          console.log(language)
          this.languageFrom = language
          if (language.text === 'Kisii') {
            this.word = this.kisii[Math.floor(Math.random() * this.kisii.length)]
          } else if (language.text === 'Maasai') {
            this.word = this.kisii[Math.floor(Math.random() * this.kisii.length)]
          } else {
            this.word = 'Select word'
          }
        },
        next () {
          this.randomizeWord(this.languageFrom)
          this.translation = ''
          this.sentence = ''
          this.confidence = 0
          this.points++
        },
        done () {
          this.$router.push({path: '/'})
        }
      },
      watch: {
        watchLanguagesFrom: function (newVal) {
          this.randomizeWord(newVal)
        }
      }
    }
</script>

<style scoped>

</style>
