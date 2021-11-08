<template>
  <div class="productGover">
    <div class="commonHeadLine">自有产品</div>
    <div class="ownProductArea">
      <div class="listArea">
        <p
          v-for="(item, index) in ownProductList"
          :key="index"
          class="productItem"
          :style="{ color: item.color, background: item.bgColor }"
        >
          {{ item.name }}
        </p>
      </div>
      <div class="rightContent">
        <div class="imgArea" @click="handleWebSiteCick" />
        <div class="ownTab">
          <div class="ownTabContent">
            <span>校报</span>
            <span class="activeTab">官网</span>
            <span>App</span>
          </div>
        </div>
        <div class="modal-wrapper">
          <modal
            v-show="showWebSiteModal"
            title="官网"
            @handleClose="handleCloseWebSiteModal"
          />
        </div>
      </div>
    </div>
    <div class="commonHeadLine">政务平台</div>
    <div class="govermentArea">
      <div v-for="(item, index) in goverList" :key="index">
        <p v-if="item.title" class="goverTitle">{{ item.title }}</p>
        <div v-else class="goverItem">
          <img
            class="app-pic"
            src="@/assets/img/phonePic1.jpg"
            alt=""
            @click="handleAppClick(item.type)"
          >
        </div>
      </div>
      <div v-if="showAppModal" class="app-modal-wrapper">
        <modal :title="title" @handleClose="handleCloseAppModal" />
      </div>
    </div>
  </div>
</template>
<script>
import { ownProductList, goverList } from '../data'
import Modal from '@/components/Modal'
export default {
  name: 'OwnProduct',
  components: {
    Modal
  },
  data() {
    return {
      ownProductList: ownProductList,
      goverList: goverList,
      showWebSiteModal: false,
      title: '',
      showAppModal: false
    }
  },
  methods: {
    handleWebSiteCick() {
      // handleWebSiteCick.log("dddd");
      // this.$emit("popModal");

      this.showWebSiteModal = true
    },
    handleAppClick(title) {
      if (this.showAppModal) {
        return
      }
      this.title = title
      this.showAppModal = true
    },
    handleCloseWebSiteModal() {
      this.showWebSiteModal = false
    },
    handleCloseAppModal() {
      this.showAppModal = false
    }
  }
}
</script>
<style lang="scss" scoped>
.productGover {
  width: 474px;
  height: 539px;
  border-radius: 12px;
  background: #223958;
  position: relative;

  .ownProductArea {
    display: flex;
    padding: 30px 0px 0px 28px;
    .listArea {
      width: 94px;
      margin-right: 30px;

      .productItem {
        cursor: pointer;
        display: inline-block;
        padding: 0px 9px;
        line-height: 18px;
        margin-bottom: 17px;
        border-radius: 9px;
        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
    .rightContent {
      .imgArea {
        width: 300px;
        height: 170px;
        box-sizing: border-box;
        border-radius: 6px;
        border: 7px solid #182940;
        background: rgb(131, 114, 114);
      }
      .ownTab {
        width: 300px;
        height: 56px;
        color: #6e96cc;
        font-size: 20px;
        display: flex;
        justify-content: center;
        .ownTabContent {
          width: 195px;
          margin-top: 8px;
          span {
            cursor: pointer;
          }
        }
        .activeTab {
          font-size: 24px;
          font-weight: bold;
          color: #ffffff;
          margin: 0px 30px;
          padding-bottom: 6px;
          border-bottom: 2px solid #30d5f9;
        }
      }
    }
  }
  .govermentArea {
    height: 171px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    position: relative;

    .goverTitle {
      width: 13px;
      font-size: 14px;
      color: #fefefe;
    }
    .goverItem {
      width: 84px;
      height: 146px;
      background: #88748d;
      border: 6px solid #182940;
      border-radius: 4px;
      .app-pic {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .app-modal-wrapper {
      position: absolute;
      width: 425px;
      height: 712px;
      z-index: 1200;
      left: 100%;
      bottom: 0%;
    }
  }
  .modal-wrapper {
    position: absolute;
    z-index: 1000;
    top: -55%;
    left: 104%;
    width: 1040px;
    height: 712px;
  }
}
</style>
