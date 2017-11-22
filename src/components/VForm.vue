<template>
  <div>
    <form>
      <div class='form-row'>
        <div class='form-group col'>
          <label for='firstName'>First Name</label>
          <input type='text' class='form-control' id='firstName' placeholder='First Name' v-model='firstName'>
        </div>

        <div class='form-group col'>
          <label for='lastName'>Last Name</label>
          <input type='text' class='form-control' id='lastName' placeholder='Last Name' v-model='lastName'>
        </div>
      </div>

      <div class='form-group'>
        <div class='form-check'>
          <label class='form-check-label'>
            <input
              class='form-check-input'
              type='radio'
              name='exampleRadios'
              id='exampleRadios1'
              value='option1'
              v-model='radioOption'>Option 1
          </label>
        </div>

        <div class='form-check'>
          <label class='form-check-label'>
            <input
              class='form-check-input'
              type='radio'
              name='exampleRadios'
              id='exampleRadios2'
              value='option2'
              v-model='radioOption'>Option 2
          </label>
        </div>

        <div class='form-check'>
          <label class='form-check-label'>
            <input
              class='form-check-input'
              type='radio'
              name='exampleRadios'
              id='exampleRadios3'
              value='option3'
              v-model='radioOption'>Option 3
          </label>
        </div>
      </div>

      <div class='form-group'>
        <label for='inputAddress'>Address</label>
        <input type='text' class='form-control' id='inputAddress' placeholder='1234 Main St'>
      </div>

      <div class='form-group'>
        <label for='inputAddress2'>Address 2</label>
        <input type='text' class='form-control' id='inputAddress2' placeholder='Apartment, studio, or floor'>
      </div>

      <div class='form-row'>
        <div class='form-group col-md-6'>
          <label for='inputCity'>City</label>
          <input type='text' class='form-control' id='inputCity'>
        </div>

        <div class='form-group col-md-4'>
          <label for='inputState'>State</label>
          <select id='inputState' class='form-control' v-model='selectedOption'>
            <option value=''>Choose...</option>
            <option v-for="option in ['Option 1', 'Option 2', 'Option 3']">{{ option }}</option>
          </select>
        </div>

        <div class='form-group col-md-2'>
          <label for='inputZip'>Zip</label>
          <input type='text' class='form-control' id='inputZip'>
        </div>
      </div>

      <div class='form-group'>
        <div class='form-check'>
          <label class='form-check-label'>
            <input class='form-check-input' type='checkbox' value='option1' v-model='checkOptions'> Check Option 1
          </label>
        </div>

        <div class='form-check'>
          <label class='form-check-label'>
            <input class='form-check-input' type='checkbox' value='option2' v-model='checkOptions'> Check Option 2
          </label>
        </div>

        <div class='form-check'>
          <label class='form-check-label'>
            <input class='form-check-input' type='checkbox' value='option3' v-model='checkOptions'> Check Option 3
          </label>
        </div>
      </div>

      <button type='submit' class='btn btn-primary' @click.prevent='submit'>Sign in</button>
    </form>

    <template v-if='submitted'>
      <hr />

      <div class='card'>
        <div class='card-body'>
          <h4 class='card-title'>Reponse</h4>
          <p>First Name: {{ firstName }}</p>
          <p>Last Name: {{ lastName }}</p>
          <p>Check Options: {{ checkOptions }}</p>
          <p>Radio Option: {{ radioOption }}</p>
          <p>Selected Option: {{ selectedOption }}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        checkOptions: [],
        radioOption: null,
        selectedOption: null,
        submitted: false
      }
    },
    methods: {
      submit() {
        this.submitted = true;
      }
    }
  }
</script>
