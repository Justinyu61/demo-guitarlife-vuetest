<template>
  <div class="wrapper">
    <img src="" alt="" class="wrapper__img">
    <div class="wrapper__input">
      <input
        type="text"
        placeholder="請輸入帳號"
        class="wrapper__input__content"
        v-model="email"
        >

    </div>
    <div class="wrapper__input">
      <input
        type="password"
        placeholder="請輸入密碼"
        class="wrapper__input__content"
        v-model="password"
        autocomplete="new-password"
        >

  </div>
      <div class="wrapper__login-button" @click="handleLogin">登入</div>
    <div class="wrapper__login-link" @click="handleForgetClick">忘記密碼?</div>
    <div class="wrapper__login-link" @click="handleRegisterClick">立即註冊</div>
    <toast v-if="show" :message="toastMsg"/>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '@/utils/request'
import Toast, { useToastEffect } from '@/components/Toast'
import axios from 'axios'

const useLoginEffect = (showToast) => {

  const router = useRouter()
  const data = reactive({ email: '', password: ''})

  const handleLogin = async () => {
    try {
      const result = await post('/login', {
        email: data.email,
        password: data.password
      })
      // console.log(result)
      if( result?.data?.customer !== "" ) {
        localStorage.isLogin = true
        await router.push({name: 'Home'})
      } else {
        showToast(result?.data?.message)
      }
    } catch (e) {
      showToast('請求失敗')
    }
  }
  const { email, password } = toRefs(data)
  return { email, password, handleLogin }
}

const useRegisterEffect = () => {
  const router = useRouter()

  const handleRegisterClick = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegisterClick }
}

const usrForgetEffect = () => {
  const router = useRouter()

  const handleForgetClick = () => {
    router.push({ name: 'Forget' })
  }
  return { handleForgetClick }
}

export default {
  name: 'Login-View',
  components: { Toast },
  //職責就是告訴你代碼執行的一個流程,部會有過多的業務邏輯(可以的話就封裝出去)
  setup () {
    const { show, toastMsg, showToast } = useToastEffect()
    const { email, password, handleLogin } = useLoginEffect(showToast)
    const { handleRegisterClick } = useRegisterEffect()
    const { handleForgetClick } = usrForgetEffect()

    return {
      handleLogin,
      handleRegisterClick,
      handleForgetClick,
      email,
      password,
      show,
      toastMsg,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper{
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img{
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
    background: #000;
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
  &__login-button{
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
