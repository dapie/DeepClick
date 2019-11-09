<template>
  <div >
    <Nav 
      v-on:openLogin="loginModalActive = true" 
      v-on:openRegister="registerModalActive = true"
    />
    <section class="hero is-white welcome">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column text">
              <h1 class="title">
                Сервис диплинков
              </h1>
              <h2 class="subtitle">
                Увеличьте эффективность своей рекламной <br> кампании на 20%.
                <br>
                Получите 500 кликов на любую социальную сеть бесплатно, далее - от 490 рублей.
              </h2>
            </div>
            <div class="column">
              <figure class="image comp">
                <img src="~assets/comp.png">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section> 
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
              <figure class="image container is-96x96"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/face-with-monocle_1f9d0.png" alt=""></figure>
              <h1 class="title">
                Как же пользоваться нашим сервисом ?
              </h1>
              <nav class="breadcrumb has-arrow-separator is-large is-centered" aria-label="breadcrumbs">
                <ul>
                  <li><a href="#">Зарегистрируйся</a></li>
                  <li><a href="#">Создай диплинк</a></li>
                  <li><a href="#">Оплати клики</a></li>
                  <li><a href="#" aria-current="page">Получай подписчиков</a></li>
                </ul>
              </nav>
              <h2 class="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h2>
        </div>
      </div>
    </section> 
    <footer class="footer has-background-white">
      <div class="content has-text-centered">
        <p>
          <strong>DeepClick</strong> by <a href="https://vk.com/dapie">Denis Tkachev</a>. Техническая поддержка
          <a href="http://opensource.org/licenses/mit-license.php">support@deepclick.com</a>.
        </p>
      </div>
    </footer> 
    <div class="modal" :class="{'is-active': registerModalActive}">
      <div class="modal-background" @click="registerModalActive = false"></div>
      <div class="modal-content">
        <div class="modal-container">
          <figure class="image container is-96x96">
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/thinking-face_1f914.png" alt="">
          </figure>
          <h1 class="title has-text-centered">Регистрация</h1>
          <div class="field">
            <label class="label">Имя</label>
            <div class="control has-icons-left">
              <input class="input is-primary" type="text" placeholder="Павел Дуров">
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'user']"/>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input class="input is-primary" type="email" placeholder="mymail@mail.ru">
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'envelope']"/>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Пароль</label>
            <div class="control has-icons-left">
              <input class="input is-primary" type="password" placeholder="Пароль">
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'key']"/>
              </span>
            </div>
          </div>

          <div class="field">
            <div class="control has-icons-left">
              <input class="input is-primary" type="password" placeholder="Повторить пароль">
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'key']"/>
              </span>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox">
                Я подтверждаю <a href="#">что-то</a>
              </label>
            </div>
          </div>

          <div class="field is-grouped is-grouped-centered">
            <div class="control">
              <button class="button is-link">Зарегистрироваться</button>
            </div>
          </div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="registerModalActive = false"></button>
    </div>

    <div class="modal" :class="{'is-active': loginModalActive}">
      <div class="modal-background" @click="loginModalActive = false"></div>
      <div class="modal-content">
        <div class="modal-container">
          <figure class="image container is-96x96">
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/smiling-face-with-sunglasses_1f60e.png" alt="">
          </figure>
          <h1 class="title has-text-centered">Вход</h1>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input class="input is-primary" type="email" placeholder="mymail@mail.ru">
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'envelope']"/>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Пароль</label>
            <div class="control has-icons-left">
              <input class="input is-primary" type="password" placeholder="Пароль">
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'key']"/>
              </span>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Войти</button>
            </div>
          </div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="loginModalActive = false"></button>
    </div>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav
  },
  data() {
    return{
      loginModalActive: false,
      registerModalActive: false
    }
  }
}
</script>

<style scoped lang="scss">
  .modal-container{
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    width: 400px;
    margin: 0 auto;
  }
  .welcome .title{
    font-size: 4rem;
  }
  .welcome .subtitle{
    font-size: 1.5rem;
  }
  .image.comp img{
    max-width: 500px;
    float: right;
  }
  .text{
    align-self: center;
  }
  @media only screen and (max-width: 769px) {
    .image.comp img {
      padding: 0px 50px;
    }
  }

</style>
