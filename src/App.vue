<template>
  <div class='container'>
    <div class='row'>
      <div class='col'>
        <div class="jumbotron">
          <h1 class="display-4">Welcome to V-Form!</h1>
          <p class="lead">This is my quick reference about dynamic forms using Vue.js.</p>

          <hr class="my-4">

          <v-form></v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VForm from './components/VForm.vue'

  export default {
    components: {
      vForm: VForm
    }
  }
</script>
