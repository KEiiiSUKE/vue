<template>
      <v-card
        class="text-center mx-auto"
        outlined
        min-height="120px"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              <slot name="icon"></slot>{{ skillname }}
            </v-list-item-title> 
            <hr />
           <span style="font-size:15px">{{ skilldetail }}</span>
          </v-list-item-content>
        </v-list-item>
  </v-card>
</template>
<script>
export default {
  props: {
    skillname: String,
    skilldetail: String,
  },
};
</script>

<style scoped>
hr{
  height:3px;
  color:rgb(179, 179, 179);
  background-color: rgb(179, 179, 179);
}
</style>