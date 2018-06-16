<template>
    <div
            id="e3"
            style="max-width: 400px; margin: auto;"
            class="grey lighten-3"
    >
        <v-toolbar color="grey lighten-2">
            <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
            <v-toolbar-title class="black--text">my Work</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-card>
            <v-container
                    fluid
                    style="min-height: 0; padding: 0 !important;"
            >
                <v-layout row wrap>
                    <v-flex xs12 style="padding-bottom: 0">
                        <v-card color="white" light>
                            <v-card-text>
                                <v-container fluid grid-list-md>
                                    <v-layout row >
                                        <v-flex d-flex xs12 sm6 md4>
                                            <v-icon x-large color="green">bar_chart</v-icon>
                                        </v-flex>
                                        <v-flex d-flex xs12 sm6 md3>
                                            <v-layout row wrap>
                                                <v-flex d-flex style="padding: 0;">
                                                    <div class="headline grey--text text--darken-1">500</div>
                                                </v-flex>
                                                <v-flex d-flex style="padding: 0;">
                                                    <span class="grey--text text--lighten-1">Translations</span>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn style="margin: 0;" dark color="green">Request Work</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </div>
</template>

<script>
    export default {
      name: 'Work',
      data: () => ({
        lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
      })
    }
</script>

<style scoped>

</style>