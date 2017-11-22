<template>
  <div class='form-row'>
    <div class='form-group col'>
      <label for='firstName'>First Name</label>
      <input
      type='text'
      class='form-control'
      id='firstName'
      placeholder='First Name'
      :value='firstName'
      @input='setFirstName'>
    </div>

    <div class='form-group col'>
      <label for='lastName'>Last Name</label>
      <input
      type='text'
      class='form-control'
      id='lastName'
      placeholder='Last Name'
      :value='lastName'
      @input='setLastName'>
    </div>
  </div>
</template>

<script>
  import splitName from '../business/utils/splitName'

  export default {
    props: ['value'],
    data() {
      return {
        firstName: '',
        lastName: ''
      }
    },
    mounted() {
      this.setNameByValue()
    },
    methods: {
      changed() {
        this.$emit('input', `${this.firstName} ${this.lastName}`)
      },
      setNameByValue() {
        const names = splitName(this.value)

        this.firstName = names[0]
        this.lastName = names[1]
      },
      setFirstName(event) {
        this.firstName = event.target.value
        this.changed()
      },
      setLastName(event) {
        this.lastName = event.target.value
        this.changed()
      }
    }
  }
</script>
