<template>
  <div class="nearby">
    <h3 class="nearby__title">購買資訊</h3>
    <div
      class="nearby__item"
      v-for="item in nearbyList"
      :key="item.id"
    >
      <img :src="item.imgUrl" alt="" class="nearby__item__img">
      <div class="nearby__content">
        <div class="nearby__content__title">{{ item.title }}</div>
        <div class="nearby__content__tags">
          <span
            class="nearby__content__tag"
            v-for="(innerItem, innerIndex) in item.tags"
            :key="innerIndex"
          > {{ innerItem }} </span>
        </div>
        <p class="nearby__content__highlight">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nearby-View',
  setup () {
    const nearbyList = [
      { id: 1, imgUrl: '#', title: '蝦皮', tags: ['1XXX', '2XXX', '3XXX'], desc: '免運啥啥啥' },
      { id: 2, imgUrl: '#', title: 'PChome', tags: ['1XXX', '2XXX', '3XXX'], desc: '免運啥啥啥' },
      { id: 3, imgUrl: '#', title: 'momo', tags: ['1XXX', '2XXX', '3XXX'], desc: '免運啥啥啥' },
      { id: 4, imgUrl: '#', title: '官方網站', tags: ['1XXX', '2XXX', '3XXX'], desc: '免運啥啥啥' },
      { id: 5, imgUrl: '#', title: 'Jbuy', tags: ['1XXX', '2XXX', '3XXX'], desc: '免運啥啥啥' },
      { id: 6, imgUrl: '#', title: 'GoBuy', tags: ['1XXX', '2XXX', '3XXX'], desc: '免運啥啥啥' }
    ]
    return {
      nearbyList
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.nearby {
  &__title {
    margin: .16rem 0 .04rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;

  }

  &__item {
    display: flex;
    padding-top: .12rem;

    &__img {
      width: .56rem;
      height: .56rem;
      background: #000;
      margin-right: .16rem;
    }
  }

  &__content {
    flex: 1;
    border-bottom: .01rem solid $content-bgColor;
    padding-bottom: .12rem;

    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }

    &__tags {
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }

    &__tag {
      margin-right: .16rem;
    }

    &__highlight {
      margin: .08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: #e93b3b;
    }
  }
}
</style>
