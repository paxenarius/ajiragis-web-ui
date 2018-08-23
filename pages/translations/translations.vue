<template>
  <v-data-table
    :headers="headers"
    :items="translations"
    hide-actions
    class="elevation-1"
  >
  <template slot="items" slot-scope="props">
    <tr @click="props.expanded = !props.expanded">
      <td>{{ props.item.word_name }}</td>
      <td class="text-xs-right">{{ props.item.username }}</td>
      <td class="text-xs-right">{{ props.item.from_language_name }}</td>
      <td class="text-xs-right">{{ props.item.to_language_name }}</td>
      <td class="text-xs-right">{{ props.item.part_of_speech }}</td>
      <td class="text-xs-right">{{ props.item.translation }}</td>
      <td class="text-xs-right">{{ props.item.confidence_level }}</td>
    </tr>
    </template>
    <template slot="expand" slot-scope="props">
      <v-card-text>
      <v-list dense>
         <v-list-tile>
              <v-list-tile-content>User:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.username }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
              <v-list-tile-content>Word:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.word_name }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
              <v-list-tile-content>Translation:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.translation }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
              <v-list-tile-content>Part of Speech:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.part_of_speech }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
              <v-list-tile-content>E.g Sentence:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.example_sentence }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
              <v-list-tile-content>From Language:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.from_language_name }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
              <v-list-tile-content>To Language:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.to_language_name }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
              <v-list-tile-content>Confidence Level:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.confidence_level }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
              <v-list-tile-content>Word IsO code 2 :</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.iso_639_2_code }}</v-list-tile-content>
          </v-list-tile>
          </v-list>
          <div v-if="!props.item.approved">
            <v-btn small color="primary" @click="approveTranslation(props.item)">Approve</v-btn>
          </div>
        </v-card-text>
    </template>
  </v-data-table>
</template>

<script>
    import axios from '~/plugins/axios'

    let translationUrl = process.env.APIBaseUrl + 'translations/';

  export default {
    name: 'translations',
    data () {
      return {
        headers: [
          {
            text: 'word_name',
            align: 'left',
            value: 'word_name'
          },
          { text: 'username', value: 'username' },
          { text: 'from_language_name', value: 'from_language_name' },
          { text: 'to_language_name', value: 'to_language_name' },
          { text: 'part_of_speech', value: 'part_of_speech' },
          { text: 'translation', value: 'translation' },
          { text: 'confidence_level', value: 'confidence_level' }
        ],
        translations: []
      }
    },
    methods: {
        getTranslations: function(){
          var self = this;
          axios.get(translationUrl)
          .then(function (response) {
            self.translations = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
        },
        approveTranslation: function(translation_detail){
          var self = this;
          translation_detail.approved = true;
          axios.put(translationUrl + translation_detail.id+'/', translation_detail)
          .then(function (response) {
            self.getTranslations();
          })
          .catch(function (error) {
            console.log(error);
          });
            this.$router.push({path: '/'})
        },
      },
    mounted: function() {
        this.getTranslations();
    }
  }
</script>
