<template>
  <div class="wrapper">
    <img src="" alt="" class="wrapper__img">
    <div class="wrapper__input">
      <input type="text" placeholder="請輸入身分證" class="wrapper__input__content" v-model="id">
    </div>
    <div class="wrapper__input">
    <input type="text" placeholder="請輸入phone" class="wrapper__input__content" v-model="phone">
  </div>
    <div class="wrapper__input">
      <input type="text" placeholder="請輸入E-mail" class="wrapper__input__content" v-model="email">
    </div>
    <div class="wrapper__input">
      <input type="password" placeholder="請輸入密碼" class="wrapper__input__content" v-model="password" autocomplete="new-password">
    </div>
    <div class="wrapper__input">
      <input type="password" placeholder="請再次輸入密碼" class="wrapper__input__content" v-model="ensurement" >
    </div>
    <div class="wrapper__register-button" @click="register" >註冊</div>
    <div class="wrapper__register-link" @click="handleLoginClick">已經是會員?</div>
    <toast v-if="show" :message="toastMsg"/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import {reactive, toRefs} from 'vue'
import {post} from '@/utils/request'
import Toast, { useToastEffect } from '@/components/Toast'

const useRegisterEffect = (showToast) => {

  const router = useRouter()
  const data = reactive({ id: '', email: '', password: '', phone: '', ensurement: '' })

  const register = () => {
    console.log(password.value , ensurement.value)
    if (password.value !== ensurement.value) {
      showToast('密碼輸入錯誤')
    } else {
      handleRegister()
    }
  }

  const handleRegister = async () => {
    try {
      const result = await post('/customer/register', {
        id: data.id,
        email: data.email,
        password: data.password,
        phone: data.phone
      })
      // console.log(result)
      if (result?.data?.customer !== "") {
        localStorage.isLogin = true
        await router.push({name: 'Login'})
      } else {
        showToast('註冊失敗!')
      }
    } catch (e) {
      showToast('請求失敗')
    }
  }

  const { id, phone, email, password, ensurement } = toRefs(data)

  return { id, phone, email, password, ensurement, register, handleRegister }
}


const returnLoginEffect = ()=> {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'Login' })
  }
  return { handleLoginClick }
}

export default {
  name: 'Register-View',
  components: { Toast },
  setup () {

    const { show, toastMsg, showToast } = useToastEffect()
    const { handleLoginClick } = returnLoginEffect()
    const { id, phone, email, password, ensurement, register, handleRegister } = useRegisterEffect(showToast)


    return {
      handleLoginClick,
      handleRegister,
      register,
      id,
      phone,
      email,
      password,
      ensurement,
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
  &__register-button{
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091ff;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,.32);
    border-radius: .04rem;
    font-size: .24rem;
    text-align: center;
    color: #fff;
  }
  &__register-link{
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
    margin: 0 .02rem;
  }
}
</style>
