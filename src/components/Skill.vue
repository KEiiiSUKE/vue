<template>
  <div>
    <h1 style="text-align: center">SKILL</h1>
    <hr />
    <br />
    <v-row>     
      <v-col cols="12" sm="12" md="6" v-for="(skill, i) in skills" :key="i">  
        <SkillCard :skillname="skill.name" :skilldetail="skill.detail">
          <i :class="skill.icon" style="margin-right:5px" slot="icon"></i
        ></SkillCard>
      </v-col>  
    </v-row>
        <br />
        <h1 style="text-align: center">HOBBY</h1>
    <hr />
      <br />
    <v-row>
      <v-col cols="12" sm="12" md="6" v-for="(hobby, i) in hobbys" :key="i">
        <SkillCard :skillname="hobby.name" :skilldetail="hobby.detail">
          <i :class="hobby.icon" style="margin-right:5px" slot="icon"></i
        ></SkillCard>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import SkillCard from "./SkillCard.vue";
export default {
  components: { SkillCard },
  data: () => ({
    skills: [
      {
        name: "Java",
        detail:
          "金融系業務アプリ開発でメイン言語として使用。FrameworkはSpringの使用経験あり。",
        icon: "devicon-java-plain",
      },
      {
        name: "CSS",
        detail: "金融系業務アプリ開発で使用。",
        icon: "devicon-java-plain",
      },
      {
        name: "Vue.js",
        detail: "このポートフォリオサイトで使用。",
        icon: "devicon-html5-plain",
      },

      {
        name: "HTML",
        detail: "金融系業務アプリ開発で使用。",
        icon: "devicon-html5-plain",
      },
      {
        name: "ShellScript",
        detail: "金融系業務アプリ開発、電力系会社の帳票システムで使用。",
        icon: "devicon-linux-plain",
      },
      {
        name: "JavaScript",
        detail: "金融系業務アプリ開発で使用。",
        icon: "devicon-javascript-plain",
      },
    ],
    hobbys: [
      {
        name: "Video Editing",
        detail: "Adobe After Effects、Adobe Premiere Proを使用して趣味で動画編集行う。",
        icon: "devicon-chrome-plain",
      },
      {
        name: "Marketing",
        detail:
          "趣味で運営しているブログにコミットしたいと考えたためTechAcademyのWebマーケティングコースを受講し、SEOや広告運用などの基礎マーケティング知識を習得。",
        icon: "devicon-wordpress-plain",
      },
    ],
  }),
};
</script>