<template>
  <Container title="Home page">
    <v-row>
      <v-col cols="12" sm="4" v-for="(item, index) in movies" :key="index">
        <MovieCard :id="item.id" :name="item.name" :image-url="item.imageUrl" />
      </v-col>
    </v-row>
  </Container>
</template>

<script>
import { Container } from "~/components/layouts";
import { MovieCard } from "~/components/cards";

export default {
  components: {
    Container,
    MovieCard
  },
  async asyncData({ app }) {
    let movies = [];
    await app.$api.get("/movies").then(res => {
      const { data } = res.data;
      movies = data.map(el => ({
        id: el.id,
        name: el.name,
        imageUrl: el.posterUrl
      }));
    });
    return { movies };
  }
};
</script>