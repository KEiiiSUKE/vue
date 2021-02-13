<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <v-navigation-drawer fixed temporary v-model="drawer">
      <v-card class="mx-auto" max-width="300" tile>
        <v-list flat>
          <v-subheader>MENU</v-subheader>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in lists" :key="i">
              <v-list-item-icon>
                <router-link :to="item.route" class="menu-router-style">
                  <v-icon v-text="item.icon"></v-icon> <v-spacer />
                </router-link>
              </v-list-item-icon>
              <v-list-item-content>
                <router-link :to="item.route" class="menu-router-style">
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                  <v-spacer />
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-container style="height: 100%; max-width: 60%" class="media-container">
      <v-app-bar color="teal lighten-1" app dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>VUE-PORTFOLIO</v-toolbar-title>
        <v-spacer></v-spacer>

        <router-link to="/" class="router-style"
          ><v-btn text>PROFILE</v-btn></router-link
        >
        <router-link to="/activities" class="router-style"
          ><v-btn text>ACTIVITIES</v-btn></router-link
        >
        <router-link to="/skill" class="router-style"
          ><v-btn text>SKILL</v-btn></router-link
        >
      </v-app-bar>
      <v-main>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </v-main>
    </v-container>
    <v-footer color="teal lighten-1" padless dark>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>© 2021 KEiSUKE All rights reserved.</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>


<script>
import "devicon";
export default {
  data: () => ({
    drawer: false,
    selectedItem: 1,
    lists: [
      { text: "PROFILE", icon: "mdi-account", route: "/" },
      { text: "ACTIVITIES", icon: "mdi-clock", route: "/activities" },
      { text: "SKILL", icon: "mdi-flag", route: "/skill" },
    ],
  }),
};
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  will-change: opacity;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.router-style {
  text-decoration: none;
}

.menu-router-style {
  text-decoration: none;
  color: gray;
}

html {
  font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro",
    "Yu Gothic Medium", "游ゴシック Medium", "游ゴシック体", "メイリオ",
    sans-serif;
}

@media screen and (max-width: 400px) {
  .media-container {
    max-width: 100% !important;
  }

  .router-style {
    display: none;
  }
}
</style>