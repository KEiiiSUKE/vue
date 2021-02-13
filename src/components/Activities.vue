<template>
<div>
    <h1 style="text-align: center">ACTIVITIES</h1>
    <hr />
    <br />
      <v-timeline>
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
              {{year.title}}
            </h2>
            <span v-text="year.content"></span>
          </div>
        </v-timeline-item>
      </v-timeline>
      
      </div>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        title: "大学生",
        color: "teal",
        year: "〜2016",
        content: "工学部に所属していたが、勉学に真面目に取り組くまなかったため社会人になってから後悔。。。",
      },
      {
        title: "データベースエンジニア",
        color: "indigo",
        year: "2016",
        content: "SESの企業に就職。配属されたのがインフラ系の現場だったためデータベースエンジニアとして2年半従事。Oracle製品をお客様の環境に導入するようなサーバ構築業務を行う。",
      },
      {
        title: "プログラマー",
        color: "teal",
        year: "2018",
        content: "開発の分野に興味があったため、プログラマーにシフト。主にJavaをメインで開発する金融系のアプリ開発2年半携わる。基本設計~結合テスト工程までを対応。",
      },
      {
        title: "プログラマー",
        color: "indigo",
        year: "2020",
        content: "電力系会社にてJava・ShellScriptで使用して開発。スポット対応としてコーディング~結合テスト工程までを対応。",
      },
      {
        title: "現在",
        color: "teal",
        year: "2021〜",
        content: "フロントエンドエンジニア・マーケティングの分野に興味があり、Webマーケティング・Vue.jsを学習中。Webマーケティングについてはオンライン講座を受講。",
      },
    ],
  }),
};
</script>