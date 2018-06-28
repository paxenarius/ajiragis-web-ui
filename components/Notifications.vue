<template>
    <div
        id="e3"
        style="margin-top: 1em;">
    <v-toolbar color="grey lighten-2">
        <v-icon>alarm</v-icon>
        <v-toolbar-title class="black--text">Notifications</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn style="margin: 0;" dark flat small color="blue darken-1">
        More
        <v-icon>arrow_forward</v-icon>
        </v-btn>
    </v-toolbar>
        <v-container
            style="min-height: 0; padding: 0 !important;">
        <v-layout row wrap>
            <v-flex xs12 style="padding-bottom: 0">
                <v-card-text>
                ...
                </v-card-text>
            </v-flex>
        </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Notifications",
        data: () => ({
            lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
        })
    }
</script>

<style scoped>

</style>