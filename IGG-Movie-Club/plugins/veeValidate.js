import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

export default () => {
  extend('required', {
    ...required,
    message: 'กรุณากรอก{_field_}',
  })

  extend('password', {
    validate(value) {
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
      let isValid = false
      if (`${value}`.match(regex)) {
        isValid = true
      }
      return isValid
    },

    message: '{_field_}ไม่ถูกต้อง',
  })
}
