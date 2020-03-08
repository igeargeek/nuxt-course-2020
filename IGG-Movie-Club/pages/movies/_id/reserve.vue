<template>
  <Container title="Seat reservation">
    <v-row>
      <v-col cols="12" md="4">
        <img :src="imageUrl" width="100%" />
      </v-col>
      <v-col cols="12" md="8">
        <h2>{{name}}</h2>
        <p class="mt-5">{{description}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <Youtube link="https://www.youtube.com/embed/R64J-IMFjOk" />
      </v-col>
    </v-row>
  </Container>
</template>

<script>
import { Container } from "~/components/layouts";
import { Youtube } from "~/components/videos";

export default {
  components: {
    Container,
    Youtube
  },
  async asyncData({ app, params }) {
    let movie = null;
    const { id } = params;
    await app.$api.get(`/movies/${id}`).then(res => {
      const { data } = res;
      movie = {
        id: id,
        name: data.name,
        description: data.description,
        imageUrl: data.posterUrl,
        youtubeUrl: data.youtubeUrl
      };
    });
    return movie;
  }
};
</script>