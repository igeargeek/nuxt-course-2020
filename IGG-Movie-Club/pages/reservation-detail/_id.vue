<template>
  <Container :title="`Seat reserved detail : ${movie.name}`">
    <v-row class="mt-10">
      <v-col cols="12" md="4">
        <img :src="movie.posterUrl" width="100%" />
      </v-col>
      <v-col cols="12" md="8">
        <h2>Introduction</h2>
        <p class="mt-5">{{movie.description}}</p>
        <h2>Seat reserved</h2>
        <p>Amount : {{seatNo.length}} unit</p>
        <p>Seat number : {{seatNo}}</p>
        <nuxt-link to="/">Back to home page</nuxt-link>
      </v-col>
    </v-row>
  </Container>
</template>

<script>
import { Container } from "~/components/layouts";

export default {
  components: {
    Container
  },
  data() {
    return {
      movie: {
        name: "",
        posterUrl: "",
        description: ""
      },
      seatNo: []
    };
  },
  mounted() {
    this.getSeatDetail();
  },
  methods: {
    getSeatDetail() {
      this.$api.get(`/reservations/${this.$route.params.id}`).then(res => {
        const { seatNo, movieDetail } = res.data;
        this.movie = {
          name: movieDetail.name,
          posterUrl: movieDetail.posterUrl,
          description: movieDetail.description
        };
        this.seatNo = [...seatNo];
      });
    }
  }
};
</script>