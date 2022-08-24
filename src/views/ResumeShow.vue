<script>
// eslint-disable-next-line no-unused-vars
import axios from "axios";

export default {
  data: function () {
    return {
      resume: {
        first_name: "Joe",
        last_name: "Shmoe",
        email: "joeshmoe@example.com",
        phone_number: 999,
        bio: "average guy",
        linkedin_url: "test.com",
        twitter_handle: "@joeshmoe",
        website_url: "test.com",
        online_resume_url: "test.com",
        github_url: "test.com",
        photo: "test.jpg",
        experience: [
          {
            start_date: "December 2019",
            end_date: "July 2022",
            job_title: "Boss",
            company_name: "Spotify",
            details: "Music and stuff",
          },
          {
            start_date: "July 1999",
            end_date: "March 2019",
            job_title: "Janitor",
            company_name: "School",
            details: "Clean stuff",
          },
        ],
        education: [
          {
            start_date: "January 1994",
            end_date: "May 1998 ",
            degree: "Math",
            university: "UCLA",
            details: "numbers",
          },
          {
            start_date: "1",
            end_date: "2",
            degree: "job",
            university: "Some school",
            details: "xyz",
          },
        ],
        skills: ["Vue.js", "HTML", "CSS", "Ruby", "Javascript"],
        capstone: [
          {
            name: "Spotify App",
            description: "Find new music based on your favorite songs!",
            url: "https://open.spotify.com/",
            screenshot: "https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png",
          },
        ],
      },
      skills_sentence: "",
    };
  },
  // created: function () {
  //   axios.get("/resumes/" + this.$route.params.id + ".json").then((response) => {
  //     this.resume = response.data;
  //     console.log(response.data);
  //   });
  // },
  methods: {},
};
</script>

<template>
  <div class="resume-show">
    <div class="container">
      <h1>{{ resume.first_name }} {{ resume.last_name }}'s Resume</h1>
      <hr />
      <h2>Basic Info</h2>
      <p>First Name: {{ resume.first_name }}</p>
      <p>Last Name: {{ resume.last_name }}</p>
      <p>Email: {{ resume.email }}</p>
      <p>Phone Number: {{ resume.phone_number }}</p>
      <p>Bio: {{ resume.bio }}</p>
      <a
        class="twitter-timeline"
        :href="`https://twitter.com/${resume.twitter_handle}`"
        data-width="300"
        data-height="400"
      >
        Tweets by {{ resume.twitter_handle }}
      </a>
      <p><a href="{{ resume.website_url }}">Website</a></p>
      <p><a href="{{ resume.github_url }}">GitHub</a></p>
      <p>Photo: {{ resume.photo }}</p>
      <hr />
      <h2>Experience</h2>
      <div v-for="experience in resume.experience" v-bind:key="experience">
        <p>Job Title: {{ experience.job_title }}</p>
        <p>Start Date: {{ experience.start_date }}</p>
        <p>End Date: {{ experience.end_date }}</p>
        <p>Company Name: {{ experience.company_name }}</p>
        <p>Details: {{ experience.details }}</p>
        <br />
      </div>
      <h2>Education</h2>
      <div v-for="education in resume.education" v-bind:key="education">
        <p>University: {{ education.university }}</p>
        <p>Degree: {{ education.degree }}</p>
        <p>Details: {{ education.details }}</p>
        <p>Start Date: {{ education.start_date }}</p>
        <p>Graduated: {{ education.end_date }}</p>
        <br />
      </div>
      <hr />
      <span>Skills:</span>
      <span v-for="skill in resume.skills" v-bind:key="skill">
        <span>{{ skill }}</span>
      </span>
      <div></div>
      <hr />
      <h2>Capstone Project</h2>
      <div v-for="capstone in resume.capstone" v-bind:key="capstone">
        <p>Name: {{ capstone.name }}</p>
        <p>Description: {{ capstone.description }}</p>
        <p><a :href="capstone.url">See My Project!</a></p>
        <img :src="capstone.screenshot" />
      </div>
      <router-link to="/">Back To All Resumes</router-link>
    </div>
  </div>
</template>

<style></style>
