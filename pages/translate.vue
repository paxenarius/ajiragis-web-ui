<template>
  <div
      id="e3"
      style="max-width: 800px; margin: auto;"
      class="grey lighten-3"
  >
    <v-toolbar light color="grey lighten-1">
      <v-toolbar-title>Translate</v-toolbar-title>
      <v-spacer></v-spacer>
      100
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
          <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
    export default {
      name: 'mywork'
    }
</script>

<style scoped>

</style>