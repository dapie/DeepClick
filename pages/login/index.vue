<template>
  <div>
    <div class="modal is-active">
      <nuxt-link to="/" class="back-button"><font-awesome-icon :icon="['fas', 'arrow-left']" class=""/>&nbsp;Вернуться на главную</nuxt-link>
      <div class="modal-content">
        <form class="box" v-on:submit.prevent="login()">
          <figure class="image container is-96x96">
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/smiling-face-with-sunglasses_1f60e.png" alt="">
          </figure>
          <h1 class="title has-text-centered">Вход</h1>
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input class="input" type="email" placeholder="mymail@mail.ru" v-model="email" @change="checkEmail()" :class="{'is-danger': emailError, 'is-primary': !emailError}">
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'envelope']"/>
              </span>
            </div>
            <transition name="fade">
              <p class="help is-danger" v-if="emailError">{{this.emailError}}</p>
            </transition>
          </div>

          <div class="field">
            <label class="label">Пароль</label>
            <div class="control has-icons-left">
              <input class="input is-primary" type="password" placeholder="Пароль" v-model="password" @change="checkPass()" :class="{'is-danger': passError, 'is-primary': !passError}">
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'key']"/>
              </span>
            </div>
            <transition name="fade">
              <p class="help is-danger" v-if="passError">{{this.passError}}</p>
            </transition>
          </div>

          <div class="field">
            <button class="button is-link is-fullwidth" type="submit">Войти</button>
          </div>
          <div class="field">
            <nuxt-link to="register">
              <button class="button is-light is-fullwidth" type="submit">У меня нет аккаунта</button>
            </nuxt-link>
          </div>
        </form>
      </div>
    </div>
    <Message ref="message"/>
  </div>
</template>

<script>
import Message from '~/components/Message.vue'

export default {
  components: {
    Message,
  },
  middleware ({ $auth, store, redirect }) {
    if ($auth.user) {
      return redirect('/deeplinks')
    }
  },
  data() {
    return{
      email: "",
      password: "",
      passError: "",
      emailError: ""
    }
  },
  methods: {
    checkEmail(){
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.emailError = re.test(this.email) ? "" : "Невалидная почта"
    },
    checkPass(){
      this.passError = this.password.length >= 8 ? "" : "Пароль должен содержать минимум 8 символов"
    },
    login() {
      this.checkEmail()
      this.checkPass()
      if(this.passError || this.emailError) return
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      }).catch(e => {
        this.$refs.message.showMessage(e.response.data, true)
      })
    },
  }
}
</script>

<style scoped lang="scss">
  .back-button{
    position: absolute;
    left: 20px;
    top: 20px;
  }

  .box{
    width: 400px;
    margin: 0 auto;
  }
  .modal{
    background: $light;
  }
  .modal-content{
    overflow: visible;
  }
  .error{
    color: $danger;
  }

  @media only screen and (max-width: 400px) {
    .box{
      width: 100%;
      margin: 0;
    }
  }

  @media only screen and (max-width: 769px) {
    .image.comp img {
      padding: 0px 50px;
    }
  }
</style>
