<template>
    <div
            id="e3"
            style="max-width: 400px; margin: auto;"
            class="grey lighten-3"
    >
        <v-toolbar color="pink">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">My Music</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>
        <v-card>
            <v-container
                    fluid
                    style="min-height: 0;"
                    grid-list-lg
            >
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card color="blue-grey darken-2" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline">Unlimited music now</div>
                                <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn flat dark>Listen now</v-btn>
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
      name: 'Work'
    }
</script>

<style scoped>

</style>