<template>
  <div>
    <h1 style="text-align: center">PROFILE</h1>
    <hr />
    <v-row class="mt-10">
      <v-col class="pt-5" cols="12" md="5" sm="12" style="text-align:center">
        <img src="../assets/neko.jpg" alt="profile-image" id="neko-style" />
      </v-col>
      <v-col mp-0 cols="12" sm="12" md="7">
        <v-card class="mx-auto" max-width="600px">
          <v-card-text>
            <p class="display-1 text--primary">KEiSUKE</p>
            <p>ITエンジニア</p>
            <div class="text--primary">
              これまでデータベースエンジニアとして2年半、Java言語を使用した金融系のアプリ開発に2年ほど従事。
              いま現在はフロントエンド側の開発に挑戦したいと考え、半年後に転職目標として活動中。<br>
              直近ではフロントエンド開発でも生かせるように、オンラインスクールにてWebマーケティングコースを受講し、
              Webマーケティングの知識を身に付けたり、Vue.jsを独学中。<br>
              プライベートではブログを運営し、日々アクセス数を増やすように試行錯誤中。
            </div>
          </v-card-text>
          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%"
            >
              <v-card-text class="pb-0">
                <p class="display-1 text--primary">Origin</p>
                <p>
                  late 16th century (as a noun denoting a place where alms were
                  distributed): from medieval Latin eleemosynarius, from late
                  Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
                </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn text color="teal accent-4" @click="reveal = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    reveal: false,
  }),
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

#neko-style {
  width: 250px;
  border-radius: 50%;
}

.test {
  display: inline-block;
}
</style>