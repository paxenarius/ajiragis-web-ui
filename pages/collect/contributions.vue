<template>
  <v-data-table
    :headers="headers"
    :items="contributions"
    class="h3"
  >
  <template slot="items" slot-scope="props">
      <td class="text-xs-right">{{ props.item.username }}</td>
      <td class="text-xs-right">{{ props.item.language_name }}</td>
      <td class="text-xs-right">{{ props.item.text }}</td>
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
              <v-list-tile-content class="align-end">{{ props.item.language_name }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
              <v-list-tile-content>Translation:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.text }}</v-list-tile-content>
          </v-list-tile>
          </v-list>
        </v-card-text>
    </template>
  </v-data-table>
</template>

<script>
  import axios from '~/plugins/axios'

  let contributionUrl = process.env.APIBaseUrl + 'data-collect/contributions/';

  export default {
    name: 'contributions',
    data () {
      return {
        headers: [
          { text: 'User', value: 'username' },
          { text: 'Language', value: 'language_name' },
          { text: 'Text', value: 'text' }
        ],
        contributions: []
      }
    },
    methods: {
        getContributions: function(){
          var self = this;
          axios.get(contributionUrl)
          .then(function (response) {
            self.contributions = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      },
    mounted: function() {
        this.getContributions();
    }
  }
</script>
