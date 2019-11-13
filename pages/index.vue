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
    login() {
      this.$auth.loginWith('local', {
        data: {
          email: 'admin',
          password: '123'
        }
      })
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
