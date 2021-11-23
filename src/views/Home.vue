<template>
  <div class="home">
    <h1>NEW AND WAY BETTER MOVIE APP!</h1>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.title }}</h2>
      <p></p>
      <router-link v-bind:to="`/movies/${movie.id}`">
        <button>Show Me More!</button>
      </router-link>
      <p></p>
      <p>------------------------------------</p>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data: function () {
    return {
      movies: [],
      newMovieParams: {},
      currentMovie: {},
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("/movies").then((response) => {
        this.movies = response.data;
      });
    },
  },
};
</script>
