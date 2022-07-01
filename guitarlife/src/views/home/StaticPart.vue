<template>
  <div class="position">
    <fa class="position__icon" :icon="['fas', positionFrontIcon]"/>
    {{ positionText }}
    <fa class="position__notice" :icon="['far', positionBackIcon]"/>
  </div>
  <div class="search">
    <fa class="search__icon" :icon="['fas', searchIcon]"/>
    <p class="search__text">{{searchText}}</p>
  </div>
  <div class="banner">
    <img class="banner__img" :src= bannerImg>
  </div>
  <div class="icons">
    <div
      class="icons__item"
      v-for="item in iconList"
      :key="item.id"
    >
      <img :src="item.imgUrl" alt="" class="icons__item__img">
      <p class="icons__item__desc">{{item.text}}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
export default {
  name: 'StaticPart-View',
  setup () {
    const iconList = [
      { id: 1, imgUrl: '#', text: '1XX' },
      { id: 2, imgUrl: '#', text: '2XX' },
      { id: 3, imgUrl: '#', text: '3XX' },
      { id: 4, imgUrl: '#', text: '4XX' },
      { id: 5, imgUrl: '#', text: '5XX' },
      { id: 6, imgUrl: '#', text: '6XX' },
      { id: 7, imgUrl: '#', text: '7XX' },
      { id: 8, imgUrl: '#', text: '8XX' },
      { id: 9, imgUrl: '#', text: '9XX' },
      { id: 10, imgUrl: '#', text: '10XX' }
    ]
    const bannerImg = ref('https://tse4.mm.bing.net/th?id=OIP.XrU3ByTxKiBsoAaaa9crBwHaEK&pid=Api&P=0&w=307&h=173')
    const positionObj = reactive({ positionFrontIcon: 'location-dot', positionBackIcon: 'bell', positionText: '新北市土城區學府路一段126巷62號12樓' })
    const { positionFrontIcon, positionBackIcon, positionText } = toRefs(positionObj)
    const searchObj = reactive({ searchIcon: 'magnifying-glass', searchText: '會員優惠喔~' })
    const { searchIcon, searchText } = toRefs(searchObj)
    return {
      iconList,
      positionFrontIcon,
      positionBackIcon,
      positionText,
      bannerImg,
      searchIcon,
      searchText
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .18rem;
  @include ellipsis;
  color: $content-fontcolor;

  .position__icon {
    position: relative;
    top: -.01rem;
    font-size: .2rem;
  }

  .position__notice {
    position: absolute;
    right: 0;
    font-size: .2rem;
  }
}

.search {
  margin-bottom: .12rem;
  background: $content-bgColor;
  color: #b7b7b7;
  border-radius: .16rem;

  &__icon {
    display: inline-block;
    padding: 0 .12rem 0 .16rem;
    font-size: .2rem;
  }

  &__text {
    display: inline-block;
    font-size: .16rem;
  }
}

.banner {
  &__img {
    width: 100%;
    height: 1.6rem;
    border-radius: .2rem;
  }
}

.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;

  &__item {
    width: 20%;

    &__img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
      background: #000;
    }

    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}

.gap {
  height: .1rem;
  background: $content-bgColor;
  margin: 0 -.18rem;
}
</style>
