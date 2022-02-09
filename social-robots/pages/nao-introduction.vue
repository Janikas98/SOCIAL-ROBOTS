<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card style="width: 100%">
          <v-img v-if="$route.query.ai != 'no_robot'" :src="require('../static/nao_waves.gif')" contain max-height="40vh"></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card style="height: 20vh">
          <v-card-title class="headline" style="text-align: center !important; display: block; font-size: 40px !important; line-height: 20vh; padding: 0px;">
            <span v-if="$route.query.ai == 'yes'">Hi! I'm NAO, your AI advisor powered by advanced DEEP LEARNING methods!</span>
            <span v-else-if="$route.query.ai == 'no'">Hi! I'm NAO, your robot advisor!</span>
            <span v-else-if="$route.query.ai == 'no_robot'">Hi! I'm your AI advisor powered by advanced DEEP LEARNING methods!</span>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card style="height: fit-content; padding: 15px;">
          <v-card-title class="headline" style="text-align: left !important; display: block; font-size: 25px !important; padding: 5px;">
            <div v-if="$route.query.ai != 'no_robot'">
              <span style="width: 50%;">
                I'm  going to help you play a simplified version of Wordle!
              </span><br />
              <span style="width: 50%;">
                 You will have to guess a five letter word in five attempts. At each attempt, you will be able to choose between 2 words.
              </span>
              <br />
              <span style="width: 50%;">
                I will point towards the word I recommend, you can follow my recommendation or not.
              </span>
              <br />
              <span style="width: 50%;">
                 After each guess, the color of the letters will change to show how close your guess was to the word.
              </span>
              <br />
              <span style="width: 50%; color: yellow;" >
              Yellow</span>
              <span style="width: 50%;">
                if the letter is in the word but in the wrong position,
              </span>
              <span style="width: 50%; color: green;" >
              Green</span>
              <span style="width: 50%;">
                if it's in the correct position and
              </span>
              <span style="width: 50%; color: red;" >
              Red</span>
              <span style="width: 50%;">
                if the letter is not in the word!
              </span>
              <br />
              <span style="width: 50%;">
                Have fun and good luck!
              </span>
            </div>
            <div v-else-if="$route.query.ai == 'no_robot'">
              <span style="width: 50%;">
                I'm  going to help you play a simplified version of Wordle!
              </span><br />
              <span style="width: 50%;">
                 You will have to guess a five letter word in five attempts. At each attempt, you will be able to choose between 2 words.
              </span>
              <br />
              <span style="width: 50%;">
                I will highlight at
              </span>
              <span style="width: 50%; color: #FFBF00; font-weight:bold;" >
              yellow</span>
              <span style="width: 50%;">
                the word I recommend, you can follow my recommendation or not.
              </span>
              <br />
              <span style="width: 50%;">
                 After each guess, the color of the letters will change to show how close your guess was to the word.
              </span>
              <br />
              <span style="width: 50%; color: yellow;" >
              Yellow</span>
              <span style="width: 50%;">
                if the letter is in the word but in the wrong position,
              </span>
              <span style="width: 50%; color: green;" >
              Green</span>
              <span style="width: 50%;">
                if it's in the correct position and
              </span>
              <span style="width: 50%; color: red;" >
              Red</span>
              <span style="width: 50%;">
                if the letter is not in the word!
              </span>
              <br />
              <span style="width: 50%;">
                Have fun and good luck!
              </span>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card style="height: fit-content; padding: 15px;">
          <v-card-title class="headline" style="text-align: left !important; display: block; font-size: 25px !important; padding: 5px;">
            <div>
              <span style="width: 50%;">
                You may withdraw from this project at any time. All the information collected will be made anonymous.
              </span>
              <br />
              <span style="width: 50%;">
                  During the course of the task,  your screen will be observed by a member of our research team who will annotate your responses.
              </span>
              <br />
              <span style="width: 50%;">
                  After the completion of the task, you will be asked to fill out a questionnaire to rate your experience.
              </span>
              <br />
              <span style="width: 50%;">
                  Your responses will be made anonymous and will provide data for research and educational purposes only.
              </span>
              <br />
              <span style="width: 50%;">
                  You are required to be over the age of 18 for participating in this study.
              </span>
              <br />
              <span style="width: 50%;">
                  If you have any concerns about the treatment of your rights as a research subject, you may contact our team at rsihr.project@gmail.com.
              </span>
              <br />
              <span style="width: 50%;">
                  POTENTIAL RISKS: none
              </span>
              <br />
              <span style="width: 50%;">
                  By clicking the START button you are hereby consenting to participating in this study, and acknowledging you have reviewed this consent form.
              </span>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="my-6 mx-0">
      <v-btn v-if="$route.query.ai != 'no_robot'"
        elevation="3"
        x-large
        style="width: 100%; height: 20vh; font-size: 40px;"
        color="success"
        @click="$router.push('/play_1');"
      >START</v-btn>
      <v-btn v-if="$route.query.ai == 'no_robot'"
        elevation="3"
        x-large
        style="width: 100%; height: 20vh; font-size: 40px;"
        color="success"
        @click="$router.push('/play_1_no_robot');"
      >START</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NaoIntroduction',

  mounted () {
    if (!['yes', 'no', 'no_robot'].includes(this.$route.query.ai)) {
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
