<script>
// eslint-disable-next-line no-unused-vars
import axios from "axios";

export default {
  data: function () {
    return {
      resume: {},
      // resume: {
      //   first_name: "Joe",
      //   last_name: "Shmoe",
      //   email: "joeshmoe@example.com",
      //   phone_number: 999,
      //   bio: "average guy",
      //   linkedin_url: "test.com",
      //   twitter_handle: "@DonaldTrump",
      //   website_url: "test.com",
      //   online_resume_url: "test.com",
      //   github_url: "test.com",
      //   photo: "http://dummyimage.com/204x100.png/cc0000/ffffff",
      //   experience: [
      //     {
      //       start_date: "December 2019",
      //       end_date: "July 2022",
      //       job_title: "Boss",
      //       company_name: "Spotify",
      //       details: "Music and stuff",
      //     },
      //     {
      //       start_date: "July 1999",
      //       end_date: "March 2019",
      //       job_title: "Janitor",
      //       company_name: "School",
      //       details: "Clean stuff",
      //     },
      //   ],
      //   education: [
      //     {
      //       start_date: "January 1994",
      //       end_date: "May 1998 ",
      //       degree: "Math",
      //       university: "UCLA",
      //       details: "numbers",
      //     },
      //     {
      //       start_date: "1",
      //       end_date: "2",
      //       degree: "job",
      //       university: "Some school",
      //       details: "xyz",
      //     },
      //   ],
      //   skills: ["Vue.js", "HTML", "CSS", "Ruby", "Javascript"],
      //   capstone: [
      //     {
      //       name: "Spotify App",
      //       description: "Find new music based on your favorite songs!",
      //       url: "https://open.spotify.com/",
      //       screenshot: "https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png",
      //     },
      //   ],
      // },
      // skills_sentence: "",
    };
  },
  created: function () {
    axios.get("http://localhost:3000/students/" + this.$route.params.id + ".json").then((response) => {
      this.resume = response.data;
      console.log(response.data);
    });
  },
  methods: {},
};
</script>

<template>
  <article class="resume-wrapper text-center position-relative">
    <div class="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
      <header class="resume-header pt-4 pt-md-0">
        <div class="row">
          <div class="col-block col-md-auto resume-picture-holder text-center text-md-start">
            <img class="picture" :src="resume.photo" alt="" />
          </div>
          <!--//col-->
          <div class="col">
            <div class="row p-4 justify-content-center justify-content-md-between">
              <div class="primary-info col-auto">
                <h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">
                  {{ resume.first_name + " " + resume.last_name }}
                </h1>
                <div class="title mb-3">Full Stack Developer</div>
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <a class="text-link" href="#">
                      <i class="far fa-envelope fa-fw me-2" data-fa-transform="grow-3"></i>
                      {{ resume.email }}
                    </a>
                  </li>
                  <li>
                    <a class="text-link" href="#">
                      <i class="fas fa-mobile-alt fa-fw me-2" data-fa-transform="grow-6"></i>
                      {{ resume.phone_number }}
                    </a>
                  </li>
                </ul>
              </div>
              <!--//primary-info-->
              <div class="secondary-info col-auto mt-2">
                <ul class="resume-social list-unstyled">
                  <li class="mb-3">
                    <a class="text-link" :href="resume.linkedin_url">
                      <span class="fa-container text-center me-2"><i class="fab fa-linkedin-in fa-fw"></i></span>
                      {{ resume.linkedin_url }}
                    </a>
                  </li>
                  <li class="mb-3">
                    <a class="text-link" :href="resume.github_url">
                      <span class="fa-container text-center me-2"><i class="fab fa-github-alt fa-fw"></i></span>
                      {{ resume.github_url }}
                    </a>
                  </li>
                  <li>
                    <a class="text-link" :href="resume.website_url">
                      <span class="fa-container text-center me-2"><i class="fas fa-globe"></i></span>
                      {{ resume.website_url }}
                    </a>
                  </li>
                </ul>
              </div>
              <!--//secondary-info-->
            </div>
            <!--//row-->
          </div>
          <!--//col-->
        </div>
        <!--//row-->
      </header>
      <div class="resume-body p-5">
        <section class="resume-section summary-section mb-5">
          <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">About Me</h2>
          <div class="resume-section-content">
            <p class="mb-0">{{ resume.bio }}</p>
          </div>
        </section>
        <!--//summary-section-->
        <div class="row">
          <div class="col-lg-9">
            <section class="resume-section experience-section mb-5">
              <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
              <div class="resume-section-content">
                <div class="resume-timeline position-relative">
                  <article
                    class="resume-timeline-item position-relative pb-5"
                    v-for="experience in resume.experience"
                    :key="experience"
                  >
                    <div class="resume-timeline-item-header mb-2">
                      <div class="d-flex flex-column flex-md-row">
                        <h3 class="resume-position-title font-weight-bold mb-1">{{ experience.job_title }}</h3>
                        <div class="resume-company-name ms-auto">{{ experience.company_name }}</div>
                      </div>
                      <!--//row-->
                      <div class="resume-position-time">{{ experience.start_date + " - " + experience.end_date }}</div>
                    </div>
                    <!--//resume-timeline-item-header-->
                    <div class="resume-timeline-item-desc">
                      <p>{{ experience.details }}.</p>
                    </div>
                    <!--//resume-timeline-item-desc-->
                  </article>
                  <!--//resume-timeline-item-->
                </div>
                <!--//resume-timeline-->
              </div>
            </section>
            <!--//experience-section-->
          </div>
          <div class="col-lg-3">
            <section class="resume-section skills-section mb-5">
              <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills</h2>
              <div class="resume-section-content">
                <div class="resume-skill-item">
                  <ul class="list-unstyled mb-4">
                    <li class="mb-2" v-for="skill in resume.skills" :key="skill">
                      <div class="resume-skill-name">{{ skill }}</div>
                    </li>
                  </ul>
                </div>
                <!--//resume-skill-item-->
              </div>
              <!--resume-section-content-->
            </section>
            <!--//skills-section-->
            <section class="resume-section education-section mb-5">
              <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
              <div class="resume-section-content">
                <ul class="list-unstyled">
                  <li class="mb-2" v-for="education in resume.education" :key="education">
                    <div class="resume-degree font-weight-bold">{{ education.degree }}</div>
                    <div class="resume-degree-org">{{ education.university }}</div>
                    <div class="resume-degree-time">{{ education.start_date + " - " + education.end_date }}</div>
                  </li>
                </ul>
              </div>
            </section>
            <!--//education-section-->
            <section class="resume-section reference-section mb-5">
              <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Projects</h2>
              <div class="resume-section-content">
                <ul class="list-unstyled resume-awards-list">
                  <li class="mb-2 ps-4 position-relative" v-for="project in resume.capstone" :key="project">
                    <div class="resume-award-name">{{ project.name }}</div>
                    <div class="resume-award-desc">{{ project.description }}</div>
                  </li>
                </ul>
              </div>
            </section>
            <!--//interests-section-->
            <section class="resume-section reference-section mb-5">
              <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">TWITTER</h2>
              <div class="resume-section-content"></div>
              <div>
                <a
                  class="twitter-timeline"
                  :href="`https://twitter.com/${resume.twitter_handle}`"
                  data-width="300"
                  data-height="400"
                ></a>
              </div>
            </section>
          </div>
        </div>
        <!--//row-->
      </div>
      <!--//resume-body-->
    </div>
  </article>
</template>

<style></style>
