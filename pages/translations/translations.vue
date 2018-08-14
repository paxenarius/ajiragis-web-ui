<template>
  <v-data-table
    :headers="headers"
    :items="translations"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <a @click="goToTranslationDetail(props.item.id)"><td>{{ props.item.word_name }}</td></a>
      <td class="text-xs-right">{{ props.item.username }}</td>
      <td class="text-xs-right">{{ props.item.from_language_name }}</td>
      <td class="text-xs-right">{{ props.item.to_language_name }}</td>
      <td class="text-xs-right">{{ props.item.part_of_speech }}</td>
      <td class="text-xs-right">{{ props.item.translation }}</td>
      <td class="text-xs-right">{{ props.item.confidence_level }}</td>
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
        goToTranslationDetail: function(translation_id){
            this.$router.push({path: '/translation_detail'})
        },
      },
    mounted: function() {
        this.getTranslations();
    }
  }
</script>
