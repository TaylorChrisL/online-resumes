<script>
import axios from "axios";

export default {
  data: function () {
    return {
      resume: {},
    };
  },
  created: function () {
    axios.get("/resumes/" + this.$route.params.id + ".json").then((response) => {
      this.resume = response.data;
      console.log(response.data);
    });
  },
  methods: {},
};
</script>

<template>
  <div class="resumes-show">
    <div class="container">
      <h1>TESTING</h1>
      <p>{{ resume.first_name }}</p>
      <p>{{ resume.last_name }}</p>
      <router-link to="/resumes">Back To All Resumes</router-link>
    </div>
  </div>
</template>

<template>
  <div class="show">
    <h1>This page shows one resume.</h1>
  </div>
</template>

<style></style>