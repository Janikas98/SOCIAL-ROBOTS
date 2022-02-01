<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card style="width: 100%">
          <video-player src="/nao_waves.mp4" :autoplay="true" :loop="true" />
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card style="height: 20vh">
          <v-card-title class="headline" style="text-align: center !important; display: block; font-size: 40px !important; line-height: 20vh; padding: 0px;">
            <span v-if="$route.query.ai == 'yes'">AI assistance.</span>
            <span v-else-if="$route.query.ai == 'no'">No AI assistance.</span>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="my-6 mx-0">
      <v-btn
        elevation="3"
        x-large
        style="width: 100%; height: 20vh; font-size: 40px;"
        color="success"
        @click="$router.push('/play_1');"
      >START</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NaoIntroduction',
  
  mounted () {
    if (!['yes', 'no'].includes(this.$route.query.ai)) {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#v-player {
  position: initial;
  height: 40vh;
  padding-top: unset;

}

#v-player-iframe {
  height: 40vh !important;
}
</style>
