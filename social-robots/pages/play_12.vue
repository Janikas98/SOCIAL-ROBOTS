<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="4">
        <v-btn
          elevation="3"
          x-large
          style="width: 100%; height: 40vh; font-size: 40px;"
          color="warning"
          @click="$router.push('/play_24');"
        >{{currentState.left}}</v-btn>
      </v-col>
      <v-col cols="4">
        <v-img :src="require('../static/nao_points_right.gif')" contain max-height="40vh"></v-img>
      </v-col>
      <v-col cols="4">
        <v-btn
          elevation="3"
          x-large
          style="width: 100%; height: 40vh; font-size: 40px;"
          color="warning"
          @click="$router.push('/play_25');"
        >{{currentState.right}}</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="my-3 mx-0">
      <v-col cols="12" class="px-0">
        <v-card class="align-center" style="height: max-content">
          <v-card-text class="justify-center align-center" style="text-align: center !important; display: block; font-size: 40px !important; line-height: 100%; padding: 0px;">
            <div class="py-6" style="display: inline-flex;">
              <div v-for="n in targetWord.length" :key="n" class="mx-2" style="background-color: #888888; width: 30px; height: 40px;"></div>
            </div>
            <br />
            <div class="py-6" style="display: inline-flex;">
              <div v-for="n in 1" :key="n" class="mx-2" style="background-color: #888888; width: 30px; height: 40px;"></div>
              <span style="color: green; width: 30px" class="mx-2">O</span>
              <span style="color: green; width: 30px" class="mx-2">U</span>
              <span style="color: yellow; width: 30px" class="mx-2">T</span>
              <div v-for="n in 1" :key="n" class="mx-2" style="background-color: #888888; width: 30px; height: 40px;"></div>
            </div>
            <br />
            <div class="py-6" style="display: inline-flex;">
              <div v-for="n in 1" :key="n" class="mx-2" style="background-color: #888888; width: 30px; height: 40px;"></div>
              <span style="color: green; width: 30px" class="mx-2">O</span>
              <span style="color: green; width: 30px" class="mx-2">U</span>
              <span style="color: yellow; width: 30px" class="mx-2">C</span>
              <div v-for="n in 1" :key="n" class="mx-2" style="background-color: #888888; width: 30px; height: 40px;"></div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="my-3 mx-0">
      <v-col cols="12" class="px-0">
        <v-card class="align-center" style="height: max-content">
          <v-card-text class="justify-center align-center" style="text-align: center !important; display: block; font-size: 40px !important; line-height: 100%; padding: 0px;">
            <span style="color: red; width: 30px" class="mx-2">B A K E R H M</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      targetWord: 'COUNT',
      currentState: {
        left: 'COUGH',
        right: 'COULD'
      }
    }
  },

  methods: {
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
