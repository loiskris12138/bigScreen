<template>
  <div class="friendArea">
    <div v-for="(item, index) in friendsList" :key="index" class="friendItem">
      <img :src="item.imgUrl">
    </div>
  </div>
</template>
<script>
import { friendsList } from '../data'
export default {
  data() {
    return {
      friendsList: friendsList
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.friendArea {
  width: 242px;
  margin-top: 23px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .friendItem {
    margin-bottom: 12px;
    img {
      width: 51px;
      height: 51px;
    }
  }
}
</style>
