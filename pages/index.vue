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
                  <li><a>Зарегистрируйся</a></li>
                  <li><a>Создай диплинк</a></li>
                  <li><a>Оплати клики</a></li>
                  <li><a>Получай подписчиков</a></li>
                </ul>
              </nav>
              <h2 class="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h2>
        </div>
      </div>
    </section> 
    <section class="section is-medium" id="price">
      <div class="container has-text-centered">
        <figure class="image container is-96x96"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/money-with-wings_1f4b8.png" alt=""></figure>
        <h1 class="title">
          Цены на наши пакеты
        </h1>
        <div class="columns is-3">
          <div class="column has-text-centered">
            <div class="box content">
              <p class="has-text-weight-normal is-size-4">Первый</p>
              <img class="image container is-64x64" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/white-smiling-face_263a.png" alt="">
              <h2>400 руб./мес.</h2>
              <p class="has-text-weight-normal is-size-5">400 кликов/мес.</p>
              <h4>Доп пакеты</h4>
              <p class="has-text-weight-normal is-size-6">100 кликов - 150 Руб.</p>
              <p class="has-text-weight-normal is-size-6">500 кликов - 300 Руб.</p>
              <p class="has-text-weight-normal is-size-6">1000 кликов - 600 Руб.</p>
              <button class="button is-primary is-fullwidth">
                Выбрать
              </button>
            </div>
          </div>
          <div class="column has-text-centered">
            <div class="box content">
              <p class="has-text-weight-normal is-size-4">Второй</p>
              <img class="image container is-64x64" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/face-savouring-delicious-food_1f60b.png" alt="">
              <h2>800 руб./мес.</h2>
              <p class="has-text-weight-normal is-size-5">800 кликов/мес.</p>
              <h4>Доп пакеты</h4>
              <p class="has-text-weight-normal is-size-6">100 кликов - 150 Руб.</p>
              <p class="has-text-weight-normal is-size-6">500 кликов - 300 Руб.</p>
              <p class="has-text-weight-normal is-size-6">1000 кликов - 500 Руб.</p>
              <button class="button is-primary is-fullwidth">
                Выбрать
              </button>
            </div>
          </div>
          <div class="column has-text-centered">
            <div class="box content">
              <p class="has-text-weight-normal is-size-4">Третий</p>
              <img class="image container is-64x64" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/grinning-face-with-one-large-and-one-small-eye_1f92a.png" alt="">
              <h2>1400 руб./мес.</h2>
              <p class="has-text-weight-normal is-size-5">1500 кликов/мес.</p>
              <h4>Доп пакеты</h4>
              <p class="has-text-weight-normal is-size-6">100 кликов - 150 Руб.</p>
              <p class="has-text-weight-normal is-size-6">500 кликов - 300 Руб.</p>
              <p class="has-text-weight-normal is-size-6">1000 кликов - 500 Руб.</p>
              <button class="button is-primary is-fullwidth">
                Выбрать
              </button>
            </div>
          </div>
          <div class="column has-text-centered">
            <div class="box content">
              <p class="has-text-weight-normal is-size-4">Четвертый</p>
              <img class="image container is-64x64" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/money-mouth-face_1f911.png" alt="">
              <h2>2000 руб./мес.</h2>
              <p class="has-text-weight-normal is-size-5">2000 кликов/мес.</p>
              <h4>Доп пакеты</h4>
              <p class="has-text-weight-normal is-size-6">100 кликов - 150 Руб.</p>
              <p class="has-text-weight-normal is-size-6">500 кликов - 300 Руб.</p>
              <p class="has-text-weight-normal is-size-6">1000 кликов - 500 Руб.</p>
              <button class="button is-primary is-fullwidth">
                Выбрать
              </button>
            </div>
          </div>
        </div>
        <h2 class="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h2>
      </div>
    </section> 
    <section class="hero is-primary is-medium" id="support">
      <div class="hero-body">
        <div class="container has-text-centered">
              <figure class="image container is-96x96"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/hospital_1f3e5.png" alt=""></figure>
              <h1 class="title">
                Возникли проблемы ?
              </h1>
              <div class="buttons is-centered">
                <button class="button is-white is-outlined is-medium">
                  <font-awesome-icon :icon="['fas', 'envelope']" class="is-small"/>
                  &nbsp;
                  Почта
                </button>
                <button class="button is-white is-outlined is-medium">
                  <font-awesome-icon :icon="['fab', 'telegram']" class="is-small"/>
                  &nbsp;
                  Telegram
                </button>
                <button class="button is-white is-outlined is-medium">
                  <font-awesome-icon :icon="['fab', 'vk']" class="is-small"/>
                  &nbsp;
                  Вконтакте
                </button>
              </div>
              <h2 class="subtitle">
                Пишите нам, мы всегда готовы ответить на ваши вопросы.
              </h2>
        </div>
      </div>
    </section> 
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Nav,
    Footer
  },
  data() {
    return{
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .modal-container{
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    width: 400px;
    margin: 0 auto;
  }
  .breadcrumb a, .breadcrumb a:hover{
    color: $white;
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
