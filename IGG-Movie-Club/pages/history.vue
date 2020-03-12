<template>
  <Container title="History">
    <v-card
      class="py-4 my-4 px-4"
      color="secoudary"
      v-for="reservation in reservations"
      :key="reservation.id"
    >
      <v-row>
        <v-col cols="4">
          <v-img :src="reservation.movieDetail.posterUrl" height="auto" width="300px"></v-img>
        </v-col>
        <v-col cols="8">
          <v-row>
            <v-col cols="3">Reservation Id:</v-col>
            <v-col cols="9">{{reservation.id}}</v-col>
          </v-row>
          <v-row>
            <v-col cols="3">Seat no:</v-col>
            <v-col cols="9">{{reservation.seatNo}}</v-col>
          </v-row>
          <v-row>
            <v-col cols="3">Reseration date:</v-col>
            <v-col cols="9">{{ displayDate }}</v-col>
          </v-row>
          <hr />
          <v-row>
            <v-col>
              <h2>{{reservation.movieDetail.name}}</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col>{{reservation.movieDetail.description}}</v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
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
      reservations: []
    };
  },
  computed: {
    displayDate() {
      var date = this.reservations.reduce((accumulate, data) => {
        return data.UpdatedAt;
      });

      return new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
      });
    }
  },
  mounted() {
    this.getHistories();
  },
  methods: {
    getHistories() {
      this.$api.get("/reservations").then(res => {
        const { data } = res.data;
        this.reservations = data;
      });
    }
  }
};
</script>