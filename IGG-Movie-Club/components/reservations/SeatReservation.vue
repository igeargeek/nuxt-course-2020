<template>
  <div>
    <p class="text-center">Screen</p>
    <v-row v-for="(row,index) in seats.rows" :key="index">
      <v-col cols="1" v-for="(col, indexCol) in seats.cols" :key="indexCol">
        <v-checkbox v-model="selected" :label="`${col}${row}`" :value="`${col}${row}`"></v-checkbox>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => []
    },
    reservedSeat: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selected: this.value,
      seats: {
        rows: ["A", "B", "C", "D", "E", "F"],
        cols: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      }
    };
  },
  watch: {
    value(value) {
      this.selected = value;
    },
    selected(val) {
      this.$emit("input", val);
    }
  },
  beforeMount() {
    this.handleMovies();
  },
  methods: {
    handleMovies() {
    //   this.$api.get("");
    }
  }
};
</script>