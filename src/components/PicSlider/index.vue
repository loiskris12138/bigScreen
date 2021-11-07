<template>
  <div class="slider-wrapper">
    <swiper
      :slides-per-view="3"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :options="options"
      ><swiper-slide>
        <img class="slide-pic center" src="@/assets/img/imgcenter.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="slide-pic" src="@/assets/img/img7.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="slide-pic" src="@/assets/img/img5.jpg" alt="" />
      </swiper-slide>

      <!-- ...÷ -->
      <!-- <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
      <div class="swiper-button-next" slot="button-next" @click="next"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      options: {
        loop: true,
        speed: 2500,
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        watchSlidesProgress: true,
        on: {
          setTranslate: function (swiper, translate) {
            console.log(swiper, translate);
            // const slides = swiper;
            console.log(this.slides);
            for (let i = 0; i < this.slides.length; i++) {
              const slide = this.slides.eq(i);
              const progress = this.slides[i].progress;
              slide.transform("");
              // console.log(, "i");
              const findClass = slide[0].className.indexOf("swiper-active");
              if (findClass !== -1) {
                slide[0].className = slide[0].className.substring(0, findClass);
              }
              if (i === swiper.visibleSlidesIndexes[1]) {
                slide.transform("scale(1)");
                slide[0].className = slide[0].className + " swiper-active";
              } else if (i === swiper.visibleSlidesIndexes[0]) {
                slide.transform(
                  "scale(" +
                    (1 - Math.abs(progress) / 5) +
                    ") translate(130px,20px) rotateZ(-7deg)"
                );
              } else if (i === swiper.visibleSlidesIndexes[2]) {
                slide.transform(
                  "scale(" +
                    (1 - Math.abs(progress) / 5) +
                    ") translate(-130px,20px) rotateZ(7deg)"
                );
              } else {
                slide.transform("scale(0)");
              }
              // if (
              //   slide[0].className.includes("swiper-slide-prev") ||
              //   slide[0].className.includes("swiper-slide-duplicate")
              // ) {
              //   slide.transform(
              //     "scale(" +
              //       (1 - Math.abs(progress) / 3) +
              //       ") translate(100px,20px) rotateZ(20deg)"
              //   );
              // } else {
              // }
              // ÷
            }
          },
          setTransition: function (swiper, transition) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              slide.transition(transition);
            }
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange(e) {
      console.log(e, "slide change");
    },
    // prev() {
    //   console.log(this.swiper);
    //   // this.swiper.s÷lidePrev();
    // },
    // next() {
    //   // this.swiper.slideNext();
    // },
  },
};
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: auto;
  padding: 90px 0;
  margin-left: auto;
  margin-right: auto;
  color: red;
  overflow: hidden;
}
.swiper-active {
  z-index: 200;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: 200px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  position: relative;
  transition-property: all;

  .slide-pic {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.slide-left {
  transform: scale(0.766667) rotate(-7deg) translate(127 px, 31 px) !important;
}
.el-img {
  width: 588px;
  height: 332px;
  background-color: #fff;
  display: block;
  transform: scale(0.5);
  transition: all 0.3s ease;
  border-radius: 6px;
}

#progressEffect {
  position: absolute;
  z-index: 10;
  top: 20px;
  left: 20px;
}
</style>
