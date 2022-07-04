<template>
  <div class="wrapper">
      <h2>請輸入驗證碼</h2>
      <div class="wrapper__input">
      <input type="text" v-model="captcha" class="wrapper__input__content" placeholder="請輸入驗證碼">
    </div>
    <div>
      <div class="wrapper__forget-button" @click="handleCaptcha">送出</div>
      <div class="wrapper__login-link" @click="handleLoginClick">返回登入</div>
    </div>
  </div>
</template>

<script>

import { useRouter } from 'vue-router'
import Toast, { useToastEffect } from '@/components/Toast'
import {ref, toRefs} from 'vue'

const useCaptchaEffect = (showToast) => {
  const data = ref({ captcha: '' })
  const handleCaptcha = () => {
    alert('captcha')
  }

  const { captcha } = toRefs(data)
  return { captcha , handleCaptcha}
}

const returnLoginEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push( {name: 'Login' } )
  }

  return { handleLoginClick }
}

export default {
  name: 'Forget-View',
  setup () {

    const { handleLoginClick } = returnLoginEffect()
    const { show, toastMsg, showToast } = useToastEffect()
    const { captcha, handleCaptcha } = useCaptchaEffect()

    return{
      handleLoginClick,
      handleCaptcha,
      show,
      toastMsg,
      captcha
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper{
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
  h2{
    font-size: .3rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
  }
  &__input{
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background: #f9f9f9;
    border-bottom: .01rem solid rgba(0,0,0,0.1);
    border-radius: .06rem;
    &__content{
      width: 100%;
      line-height: .48rem;
      border: none;
      outline: none;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;
      &::placeholder{
        color: $content-notice-fontcolor;
      }
    }
  }
  &__forget-button{
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091ff;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,.32);
    border-radius: .04rem;
    font-size: .24rem;
    text-align: center;
    color: #fff;
  }
  &__login-link{
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
    margin: 0 .02rem;
  }
}
</style>
