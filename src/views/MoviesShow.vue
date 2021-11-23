<template>
  <div>
    <h2>{{ movie.title }}</h2>
    <p>{{ movie.plot }}</p>

    <p>Made in: {{ movie.year }}</p>
    <p>------------------------------------</p>
    <router-link v-bind:to="`/movies/${movie.id}/edit`">Edit Post</router-link>
    |
    <router-link v-bind:to="`/`">Go Back</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    this.moviesShow();
  },
  methods: {
    moviesShow: function () {
      axios.get("/movies/" + this.$route.params.id).then((response) => {
        this.movie = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
