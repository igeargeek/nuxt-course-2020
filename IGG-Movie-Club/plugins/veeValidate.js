import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

export default () => {
  extend('required', {
    ...required,
    message: 'Please fill {_field_}',
  })

  extend('username', {
    validate(value) {
      const regex = /^[a-zA-Z0-9]{4,20}$/
      let isValid = false
      if (`${value}`.match(regex)) {
        isValid = true
      }
      return isValid
    },

    message: '{_field_} must contain a-z A-Z 0-9 and must be 4-20 characters',
  })
}
