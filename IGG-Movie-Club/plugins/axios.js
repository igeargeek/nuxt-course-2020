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

  api.onRequest((config) => {
    if (process.client) {
      const accessToken = localStorage.getItem('accessToken')
      config.headers.Authorization = `Bearer ${accessToken}`
    }
  })

  api.onError((errorResponse) => {
    const errorCode = parseInt(errorResponse.response.status, 10)
    if (errorCode === 401) {
      localStorage.removeItem('accessToken')
    }
    throw errorResponse
  })

  // Inject to context as $api
  inject('api', api)
}