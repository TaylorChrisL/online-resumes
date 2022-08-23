<script>
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
            start_date: "2",
            end_date: "2",
            job_title: "boss",
            company_name: "xyz",
            details: "xyz",
          },
          {
            start_date: "2",
            end_date: "2",
            job_title: "janitor",
            company_name: "lol",
            details: "aaa",
          },
        ],
        eduction: [
          {
            start_date: "2",
            end_date: "3",
            degree: "cop",
            university: "ucla",
            details: "xyz",
          },
          {
            start_date: "1",
            end_date: "2",
            degree: "job",
            university: "school",
            details: "xyz",
          },
        ],
        skills: ["normal"],
        capstone: [
          {
            name: "spotify",
            description: "listen",
            url: "t.com",
            screenshot: "g.jpg",
          },
        ],
      },
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
      <h1>TESTING</h1>
      <p>{{ resume.first_name }}</p>
      <p>{{ resume.last_name }}</p>
      <router-link to="/resumes">Back To All Resumes</router-link>
    </div>
  </div>
</template>

<style></style>
