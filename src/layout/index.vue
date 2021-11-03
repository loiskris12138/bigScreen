<template>
  <app-main />
</template>

<script>
import { AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    AppMain
  },
  mixins: [ResizeMixin]

}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

</style>
