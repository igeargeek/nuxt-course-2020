export default function ({ $axios, redirect }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        'Accept': 'application/json, text/plain, */*'
      }
    }
  })

  // Set baseURL to something different
  api.setBaseURL('https://nuxt-course-api.igeargeek.com')
  if (process.client) {
    api.setToken(localStorage.getItem('accessToken'), 'Bearer')
  }

  // Inject to context as $api
  inject('api', api)
}