<template>
  <div>
    <h2>Movie Info:</h2>
    <p>
      Title:
      <input type="text" v-model="movie.title" />
    </p>
    <p>
      Plot:
      <input type="text" v-model="movie.plot" />
    </p>
    <p>
      Year:
      <input type="integer" v-model="movie.year" />
    </p>
    <button v-on:click="updateMovie(movie)">Update Movie</button>
    <button v-on:click="destroyMovie(movie)">Delete Movie</button>
    <router-link v-bind:to="`/`">
      <button>Close</button>
    </router-link>
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
      });
    },
    updateMovie: function (movie) {
      axios.patch("/movies/" + movie.id, movie).then((response) => {
        console.log("Movie Created", response.data);
      });
    },
    destroyMovie: function (movie) {
      axios.delete("/movies/" + movie.id).then((response) => {
        console.log("Movie Destroyed", response.data);
        var index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      });
    },
  },
};
</script>
