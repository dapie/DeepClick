<template>
  <div>
    <div class="modal is-active">
      <div class="modal-content">
        <form class="box" v-on:submit.prevent="register()">
          <nuxt-link to="/" class="back-button has-text-centered">
            На главную
          </nuxt-link>
          <figure class="image container is-96x96">
            <img src="~assets/thinking-face.png" alt="">
          </figure>
          <h1 class="title has-text-centered">Регистрация</h1>
          <div class="field">
            <label class="label">Имя</label>
            <div class="control has-icons-left">
              <input class="input" :class="{'is-danger': nameError, 'is-primary': !nameError}" type="text" placeholder="Владимир Путин" @input="checkName" v-model="name">
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'user']"/>
              </span>
            </div>
            <transition name="fade">
              <p class="help is-danger" v-if="nameError">{{this.nameError}}</p>
            </transition>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input class="input" :class="{'is-danger': emailError, 'is-primary': !emailError}" type="email" placeholder="mymail@mail.ru" @input="checkEmail()" v-model="email">
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
              <input class="input is-primary" type="password" placeholder="Пароль" :class="{'is-danger': passError, 'is-primary': !passError}" @input="checkPass()" v-model="password">
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'key']"/>
              </span>
            </div>
            <transition name="fade">
              <p class="help is-danger" v-if="passError">{{this.passError}}</p>
            </transition>
          </div>

          <div class="field">
            <div class="control has-icons-left">
              <input class="input" type="password" placeholder="Повторить пароль" :class="{'is-danger': confError, 'is-primary': !confError}" @input="checkPass()" v-model="confirmation" >
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'key']"/>
              </span>
            </div>
            <transition name="fade">
              <p class="help is-danger" v-if="confError">{{this.confError}}</p>
            </transition>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="check">
                Я подтверждаю <a href="#">что-то</a>
              </label>
            </div>
          </div>

          <div class="field">
            <button class="button is-link is-fullwidth" type="submit">Зарегистрироваться</button>
          </div>
          <div class="field">
            <nuxt-link to="/login">
              <button class="button is-light is-fullwidth" type="submit">Уже есть аккаунт ?</button>
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
      name: "",
      email: "",
      password: "",
      check: false,
      confirmation: "",
      emailError: "",
      passError: "",
      nameError: "",
      confError: ""
    }
  },
  methods: {
    checkEmail(){
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.emailError = re.test(this.email) ? "" : "Невалидная почта"
    },
    checkPass(){
      this.passError = this.password.length >= 8 ? "" : "Пароли должен содержать минимум 8 символов"
      this.confError = this.password === this.confirmation ? "" : "Пароли не совпадают"
    },
    checkName(){
      this.nameError = this.name.length < 1 ? "Введите имя": ""
    },
    async register() {
      this.checkName()
      this.checkEmail()
      this.checkPass()
      if(this.emailError || this.passError || this.nameError || this.confError || !this.check){
        this.$refs.message.showMessage("Проверьте введеные данные", true)
        return
      }
      await this.$axios.post('/api/auth/register', {
        name: this.name,
        email: this.email,
        password: this.password,
        check: this.check
      }).then(res => {
        this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        }).catch(e => {
          this.$refs.message.showMessage(e.response.data, true)
        })
      }).catch(e => this.$refs.message.showMessage(e.response.data, true))
    },
  }
}
</script>

<style scoped lang="scss">
  .box{
    width: 400px;
    margin: 0 auto;
  }
  .modal{
    background: $light;
    overflow: auto;
  }
  .modal-content{
    overflow: visible;
  }
  .error{
    color: $danger;
  }
  .back-button{
    margin-bottom: 20px;
    display: block;
  }

  @media only screen and (max-width: 500px) {
    .box{
      width: 100%;
      margin: 0;
      box-shadow: none;
    }
    .modal{
      display: block !important;
      background: #fff;
    }
    .modal-content{
      margin: 0;
      max-height: none;
      display: block;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .3s ease-in;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>
