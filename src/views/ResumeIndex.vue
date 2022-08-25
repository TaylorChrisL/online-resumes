<script>
import axios from "axios";
export default {
  data: function () {
    return {
      resumes: [],
      //   {
      //     first_name: "Burton",
      //     last_name: "Turnbull",
      //     email: "bturnbull0@java.com",
      //     bio: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      //     skills: "IIA Standards",
      //     photo: "http://dummyimage.com/204x100.png/cc0000/ffffff",
      //   },
      //   {
      //     first_name: "Putnam",
      //     last_name: "Hesbrook",
      //     email: "phesbrook1@photobucket.com",
      //     bio: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      //     skills: "LP",
      //     photo: "http://dummyimage.com/151x100.png/cc0000/ffffff",
      //   },
      //   {
      //     first_name: "Corbie",
      //     last_name: "Spering",
      //     email: "cspering2@123-reg.co.uk",
      //     bio: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      //     skills: "WS-Federation",
      //     photo: "http://dummyimage.com/126x100.png/ff4444/ffffff",
      //   },
      //   {
      //     first_name: "Jemmie",
      //     last_name: "Cornely",
      //     email: "jcornely3@godaddy.com",
      //     bio: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      //     skills: "VTP",
      //     photo: "http://dummyimage.com/135x100.png/cc0000/ffffff",
      //   },
      //   {
      //     first_name: "Eleanore",
      //     last_name: "Tetford",
      //     email: "etetford4@mac.com",
      //     bio: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      //     skills: "Film Festivals",
      //     photo: "http://dummyimage.com/184x100.png/ff4444/ffffff",
      //   },
      //   {
      //     first_name: "Aubine",
      //     last_name: "Narbett",
      //     email: "anarbett5@prlog.org",
      //     bio: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      //     skills: "Life Cycle Assessment",
      //     photo: "http://dummyimage.com/137x100.png/cc0000/ffffff",
      //   },
      //   {
      //     first_name: "Waiter",
      //     last_name: "Colleer",
      //     email: "wcolleer6@uiuc.edu",
      //     bio: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      //     skills: "Spot TV",
      //     photo: "http://dummyimage.com/198x100.png/cc0000/ffffff",
      //   },
      //   {
      //     first_name: "Delmar",
      //     last_name: "Hartropp",
      //     email: "dhartropp7@wufoo.com",
      //     bio: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      //     skills: "Animation",
      //     photo: "http://dummyimage.com/208x100.png/cc0000/ffffff",
      //   },
      //   {
      //     first_name: "Gilbertina",
      //     last_name: "Beecham",
      //     email: "gbeecham8@archive.org",
      //     bio: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      //     skills: "AOG",
      //     photo: "http://dummyimage.com/201x100.png/5fa2dd/ffffff",
      //   },
      //   {
      //     first_name: "Tanitansy",
      //     last_name: "Bainbrigge",
      //     email: "tbainbrigge9@mapy.cz",
      //     bio: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      //     skills: "Digital Photography",
      //     photo: "http://dummyimage.com/215x100.png/cc0000/ffffff",
      //   },
      // ],
      last_nameFilter: "",
      currentResume: {},
    };
  },
  created: function () {
    this.indexResumes();
  },
  methods: {
    indexResumes: function () {
      axios.get("http://localhost:3000/students.json").then((response) => {
        this.resumes = response.data;
        console.log("All resumes:", this.resumes);
      });
    },
    filterResumes: function () {
      return this.resumes.filter((resume) => {
        var lowerLast_name = resume.last_name.toLowerCase();
        var lowerlast_nameFilter = this.last_nameFilter.toLowerCase();
        return lowerLast_name.includes(lowerlast_nameFilter);
      });
    },
  },
};
</script>

<template>
  <h1>All Resumes</h1>
  Search by Last Name:
  <input v-model="last_nameFilter" placeholder="Search resumes..." type="text" />

  <section id="why-us" class="why-us">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-lg-4 col-md-6 content-item" v-for="resume in filterResumes()" :key="resume">
          <router-link :to="`/resumes/${resume.id}`">
            <span><img :src="resume.photo" hight="200" width="200" /></span>
            <h4>{{ resume.first_name + " " + resume.last_name }}</h4>
          </router-link>
          <ul class="list-unstyled">
            <li class="mb-2" v-for="skill in resume.skills" :key="skill">
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <div class="item error" v-if="last_nameFilter && !filterResumes().length">
    <p>No results found!</p>
  </div>
  <div></div>
</template>
<style></style>
