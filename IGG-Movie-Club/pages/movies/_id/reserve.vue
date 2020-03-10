<template>
  <Container :title="`Seat reservation : ${name}`">
    <v-row>
      <v-col cols="12" class="text-center">
        <youtube :video-id="youtubeID" />
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col cols="12" md="4">
        <img :src="imageUrl" width="100%" />
      </v-col>
      <v-col cols="12" md="8">
        <h2>Introduction</h2>
        <p class="mt-5">{{description}}</p>
      </v-col>
    </v-row>
    <hr />
    <v-row class="mt-10">
      <v-col cols="12">
        <SeatReservation :reserved-seat="reservedSeat" v-model="seleted" />
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col cols="12" class="text-center">
        <ConfirmButton @click="reserve">Reserve</ConfirmButton>
      </v-col>
    </v-row>
  </Container>
</template>

<script>
import { getIdFromUrl } from "vue-youtube";
import { Container } from "~/components/layouts";
import { SeatReservation } from "~/components/reservations";
import { ConfirmButton } from "~/components/buttons";

export default {
  components: {
    Container,
    SeatReservation,
    ConfirmButton
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
        youtubeUrl: data.youtubeUrl,
        reservedSeat: data.reservedSeat
      };
    });
    return movie;
  },
  data() {
    return {
      seleted: []
    };
  },
  computed: {
    youtubeID() {
      return getIdFromUrl(this.youtubeUrl);
    }
  },
  methods: {
    reserve() {
      console.log("seleted", seleted);
    }
  }
};
</script>