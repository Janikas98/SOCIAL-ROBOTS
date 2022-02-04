<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="4">
        <v-btn
          elevation="3"
          x-large
          style="width: 100%; height: calc(100vh - 36px - 48px); font-size: 30px;"
          color="success"
          @click="$router.push('/nao-introduction?ai=yes')"
        >Built with advanced AI</v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          elevation="3"
          x-large
          style="width: 100%; height: calc(100vh - 36px - 48px); font-size: 30px;"
          color="primary"
          @click="$router.push('/nao-introduction?ai=no_robot')"
      >Not embodied</v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          elevation="3"
          x-large
          style="width: 100%; height: calc(100vh - 36px - 48px); font-size: 30px;"
          color="info"
          @click="$router.push('/nao-introduction?ai=no')"
        >Built without advanced AI</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>