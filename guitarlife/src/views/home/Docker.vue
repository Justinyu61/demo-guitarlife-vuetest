<template>
  <div class="docker">
    <!--    BEM 語法-->
    <!--    block__element--Modifier-->
    <span
      class="docker__item"
      :class="{'docker__item': true, 'docker__item--active': index === 0}"
      v-for="( item, index ) in dockerList"
      :key="item.icon">
      <div class="iconfont">
        <fa :icon="['fas', item.icon]" />
      </div>
      <div class="docker__title">{{ item.text }}</div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Docker-View',
  setup () {
    const dockerList = [
      { icon: 'house-chimney', text: '首頁' },
      { icon: 'cart-shopping', text: '購物車' },
      { icon: 'list', text: '訂單' },
      { icon: 'user', text: '我的' }
    ]
    return {
      dockerList
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  background: gray;
  color: $content-fontcolor;

  &__item {
    flex: 1;
    text-align: center;

    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }

    &--active {
      color: #1fa4fc;
    }
  }

  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
