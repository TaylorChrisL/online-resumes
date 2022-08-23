<script>
import axios from "axios";
export default {
  data: function () {
    return {
      resumes: [],
      titleFilter: "",
      currentResume: {},
    };
  },
  created: function () {
    this.indexResumes();
  },
  methods: {
    indexResumes: function () {
      axios.get("/resumes.json").then((response) => {
        this.resumes = response.data;
        console.log("All resumes:", this.resumes);
      });
    },
    filterResumes: function () {
      return this.resumes.filter((resume) => {
        var lowerTitle = resume.title.toLowerCase();
        var lowerTitleFilter = this.titleFilter.toLowerCase();
        return lowerTitle.includes(lowerTitleFilter);
      });
    },
  },
};
</script>

<template>
  <h1>All Resumes</h1>
  Search by title:
  <input v-model="titleFilter" list="titles" type="text" />
  <TransitionGroup name="list">
    <datalist id="titles">
      <option v-for="resume in resumes" v-bind:key="resume.id">{{ resume.title }}</option>
    </datalist>

    <div
      v-for="resume in filterResumes()"
      v-bind:key="resume.id"
      v-on:click="currentResume = resume"
      v-bind:class="{ selected: resume === currentResume }"
    >
      <h1>{{ resume.last_name }}</h1>
      <p>
        {{ resume.bio }}
      </p>
      <p>{{ resume.photo }}</p>
    </div>
  </TransitionGroup>
</template>
<style></style>
