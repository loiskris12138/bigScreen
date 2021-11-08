<template>
  <div class="main-swiper">
    <carousel-3d>
      <carousel-3d
        :autoplay="true"
        :autoplayTimeout="2000"
        :perspective="35"
        :display="5"
        :animationSpeed="1000"
        controlsVisible
        :controlsHeight="60"
        ref="slider"
        controlsPrevHtml='<span style="position:absolute;top:-30px;color:#338afb;left:30px">‹</span>'
        controlsNextHtml='<span style="position:absolute;top:-30px;color:#338afb;left:30px;">›</span>'
      >
        <slide v-for="(slide, i) in 6" :index="i" :key="i">
          <!-- <h1>{{ slide.title }}</h1>
      <p>{{ slide.desc }}</p> -->
          <img src="@/assets/img/imgcenter.jpg" alt="" />
        </slide>
      </carousel-3d>
    </carousel-3d>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.main-swiper {
  // w
}
</style>