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
        <ConfirmButton :loading="loading.submit" @click="reserve">Reserve</ConfirmButton>
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
        reservedSeat: data.reservedSeat || []
      };
    });
    return movie;
  },
  data() {
    return {
      seleted: [],
      loading: {
        submit: false
      }
    };
  },
  computed: {
    youtubeID() {
      return getIdFromUrl(this.youtubeUrl);
    }
  },
  methods: {
    reserve() {
      if (this.seleted.length > 0) {
        this.loading.submit = true;
        const body = {
          seatNo: this.seleted
        };
        this.$api
          .post(`/movies/${this.id}/_reseve`, body)
          .then(res => {
            this.$bus.$emit("alert");
            const { id } = res.data;
            this.$router.push(`/reservation-detail/${id}`);
          })
          .catch(error => {
            const { data } = error.response;
            this.$bus.$emit("alert", "error", data.message);
            console.error("Reserve Error:", error);
          })
          .finally(() => {
            this.loading.submit = false;
          });
      } else {
        this.$bus.$emit("alert", "error", "Please selecte seat");
      }
    }
  }
};
</script>