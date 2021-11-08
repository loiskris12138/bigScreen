<template>
  <div class="wrapper">
    <div class="box">
      <carousel-3d
        ref="slider"
        :autoplay="true"
        :autoplay-timeout="2000"
        :perspective="35"
        :display="5"
        :animation-speed="1000"
        controls-visible
        :controls-height="60"
        controls-prev-html="<span style=&quot;position:absolute;top:-30px;color:#338afb;left:30px&quot;>‹</span>"
        controls-next-html="<span style=&quot;position:absolute;top:-30px;color:#338afb;left:30px;&quot;>›</span>"
      >
        <slide v-for="(slide, i) in picList" :key="slide.id" :index="i">
          <!-- <h1>{{ slide.title }}</h1>
      <p>{{ slide.desc }}</p> -->
          <a
            v-if="i == 0"
            :href="slide.link"
            class="link"
          ><img
            src="@/assets/img/imgcenter.jpg"
            alt=""
          ></a>
          <a v-if="i == 1" :href="slide.link" class="link">
            <img
              src="@/assets/img/img5.jpg"
              alt=""
            ></a>
          <a v-if="i == 2" :href="slide.link" class="link">
            <img
              src="@/assets/img/img7.jpg"
              alt=""
            ></a>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picList: [
        {
          id: 1,
          url: '../../assets/img/imgcenter.jpg',
          link: 'https://www.ecnu.edu.cn/info/1095/58504.htm'
        },
        {
          id: 2,
          url: '@/assets/img/img5.jpg',
          link: 'https://www.ecnu.edu.cn/info/1095/58523.htm'
        },
        {
          id: 3,
          url: '../../assets/img/img6.jpg',
          link: 'https://www.ecnu.edu.cn/info/1095/58499.htm'
        }
      ]
    }
  },
  mounted() {
    console.log(this.$refs.slider)
  },
  methods: {
    onSlideChange(pa) {
      console.log(pa)
    }
  }
}
</script>

<style lang='scss' scoped>
.box {
  background: url("../../assets/img/picswiperbottom.png") bottom center
    no-repeat;
  position: relative;
  top: -10px;
  padding-bottom: 50px;
}
// .wrapper {
//   position: relative;
// }
// .box {
//   position: relative;
//   z-index: 100;
//   bottom: 10px;
// }
// .bg-img {
//   width: 839px;
//   height: 82px;
//   display: block;
//   position: absolute;
//   bottom: -20px;
//   left: 50%;
//   margin-left: -30%;
//   z-index: 1;
// }
.carousel-3d-slide {
  width: 588px !important;
  height: 332px !important;
  border-radius: 10px;
  border: 1px solid #73d8d7;
  img {
    display: block;
    width: 588px !important;
    height: 332px !important;
  }
}
.left-1 {
  // transform: translateX(400px) translateZ(-500px) rotateY(35deg) !important;
  transform: translateX(-400px) translateZ(-500px) translateY(-20px)
    rotateY(-25deg) !important;
}
.right-1 {
  transform: translateX(400px) translateZ(-500px) translateY(-20px)
    rotateY(25deg) !important;
}
.carousel-3d-controls {
  position: absolute !important;
  top: 33% !important;
  height: 0 !important;
  margin-top: -30px !important;
  left: 0 !important;
  width: 100% !important;
  z-index: 1000 !important;
}
.next span,
.prev span {
  top: -59px !important;
}
</style>
