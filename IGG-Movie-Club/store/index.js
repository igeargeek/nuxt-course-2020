export const state = () => ({
    name: '',
    username: '',
})

export const mutations = {
    user(states, payload) {
        states.name = payload.name
        states.username = payload.username
    }
}
