<template>
  <section class="hero is-fullheight has-text-centered">
    <div class="hero-body">
      <div class="container">
        <figure class="image container is-128x128">
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/smiling-face-with-smiling-eyes-and-hand-covering-mouth_1f92d.png" alt="">
        </figure>
        <h1 class="title error" >{{this.error.message}}</h1>
        <nuxt-link class="button is-primary" to="/" prefetch>
          Вернуться на главную
        </nuxt-link>
      </div>
    </div>
  </section>
<!--   <div class="container">
    <h1 v-if="error.statusCode === 404">Страница не найдена</h1>
    <h1 v-else>Произошла ошибка</h1>
    <nuxt-link to="/">Вернуться на главную</nuxt-link>
  </div> -->
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped lang="scss">
  .error{
    margin-top: 30px;
    animation-name: bounce;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
  }
  .button{
    margin-top: 30px;
    box-shadow: 0 0.5em 1em -0.125em rgba(107, 102, 255, 0.3), 0 0px 0 1px rgba(107, 102, 255, 0.05);
  }

  @keyframes bounce {
    0% {transform: translateY(-5px);}
    100% {transform: translateY(5px);}
  }

  @media (prefers-color-scheme: dark) {
      .hero-body{
        background: $dark;
      }   
      .error{
        color: #fff;
      }
    }
</style>