import moment from 'moment'
import 'moment/locale/th'

export default (ctx, inject) => {
  inject('dateTime', (dateTime, format = 'D MMM YY HH:mm') => moment(dateTime).format(format))
}
