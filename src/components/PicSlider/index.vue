<template>
  <div>
    <el-carousel
      ref="slider"
      :autoplay="false"
      type="card"
      height="200px"
      @canplay="canPlay"
      @change="change"
    >
      <el-carousel-item v-for="item in 3" id="el-slider-right" :key="item">
        <h3 class="medium">
          <img src="@/assets/img/imgcenter.jpg" alt="">
        </h3>
      </el-carousel-item>
    </el-carousel>
    <div class="pic-wrapper">
      <div class="cube">
        <div class="picture">
          <img src="@/assets/img/imgcenter.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // const className = this.$refs.slider.$children[0].$el.className
    console.log(this.$refs.slider.$children[0].$el.className)
    // this.$refs.slider.$children[1].$el.style='transform: translateX(915.74px) scale(0.83) rotateZ(30deg);'
  },
  beforeUpdate() {
    console.log('212')
  },
  methods: {
    change(params) {
      console.log(params, 'dsjdl')
      // console.log(this.$refs.slider.$children);
    },
    canPlay(a) {
      console.log(a)
      console.log('sdfsdfsdf')
    }
  }
}
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: red;
}
#el-slider-right {
  // perspective-origin:left center;
  transform-style: preserve-3d !important;
  transform-origin: 0%, 0 !important;
  // transform:;
  transform: translateX(915.74px) scale(0.83) rotateY(60deg) !important;
  border: 3px solid greenyellow;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: blue;
}
img {
  width: 100%;
  height: 100%;
  display: block;
}
.pic-wrapper {
  perspective: 800px;
  perspective-origin: 50% 100px;
  margin-left: 100px;
}
.cube {
  position: relative;
  width: 200px;
  transform-style: preserve-3d;
}
.picture {
  position: absolute;
  width: 200px;
  height: 200px;

  transform: rotateY(270deg) translateX(-100px);
  transform-origin: center left;

  .img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
