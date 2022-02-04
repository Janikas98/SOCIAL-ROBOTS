<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card style="height: 20vh">
          <v-card-title class="headline" style="text-align: center !important; display: block; font-size: 40px !important; line-height: 20vh; padding: 0px;">
            <span>Congratulations!</span>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card style="height: fit-content; padding: 15px;">
          <v-card-title class="headline" style="text-align: center !important; display: block; font-size: 30px !important; padding: 5px;">
            <div>
              <span style="width: 50%;">
                The correct word was  
              </span>
            </div>
            <div class="py-6" style="display: inline-flex;">
              <span style="color: green; width: 30px">C</span>
              <span style="color: green; width: 30px">O</span>
              <span style="color: green; width: 30px">U</span>
              <span style="color: green; width: 30px">N</span>
              <span style="color: green; width: 30px">T</span>
            </div>
            <div>
              <span style="width: 50%;">
                Please respond to the questionnaire that will be sent to you to finish this experiment.
              </span>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    
  </v-container>
</template>

<script>
export default {
  name: 'NaoIntroduction',

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