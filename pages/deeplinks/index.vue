<template>
  <div>
    <Nav 
      v-on:openLogin="loginModalActive = true" 
      v-on:openRegister="registerModalActive = true"
    />
    <section class="hero is-white welcome">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Диплинки
          </h1>
          <h2 class="subtitle">
            Управление диплинками
          </h2>
          <a class="button is-primary" @click="createModalActive = true">
            Создать диплинк
          </a>
        </div>
      </div>
    </section>
    <div class="container">
      <table class="table is-fullwidth">
  <thead>
    <tr>
      <th>№</th>
      <th>Название диплинка</th>
      <th>Ссылки</th>
      <th>Клики</th>
      <th>Осталось кликов</th>
      <th>Действия</th>
    </tr>
  </thead>
  <tbody>
    <tr v-if="Object.keys(links).length > 0" v-for="link in links" :key="link.id">
      <th>{{link.id}}</th>
      <td>
        <p>{{link.name}}</p>
        <a :href="link.link">
          {{link.link}}
        </a>
      </td>
      <td>
        <p>Редирект через ссылку-прокладку:</p>
        <a :href="'https://deepclick.com/link/' + link.id">
          https://deepclick.com/link/{{link.id}}
        </a>
        <p>Редирект напрямую:</p>
        <a :href="'https://deepclick.com/dlink/' + link.id">
          https://deepclick.com/dlink/{{link.id}}
        </a>
      </td>
      <td>{{link.clicks}}</td>
      <td>{{link.paidClicks}}</td>
      <td>
        <a class="button is-primary">
          Оплатить
        </a>
        <a class="button is-danger is-outlined">
          Удалить
        </a>
      </td>
    </tr>
    <tr v-else>
      <td colspan="6">Нет созданых ссылок</td>
    </tr>
  </tbody>
</table>
<div class="modal" :class="{'is-active': createModalActive}">
      <div class="modal-background" @click="createModalActive = false"></div>
      <div class="modal-content">
        <div class="modal-container">
          <figure class="image container is-64x64">
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/link-symbol_1f517.png" alt="">
          </figure>
          <h1 class="title has-text-centered">Создать диплинк</h1>
          <div class="tabs is-primary is-fullwidth">
            <ul>
              <li class="is-active">
                <a>
                  <font-awesome-icon :icon="['fab', 'instagram']"/>
                </a>
              </li>
              <li>
                <a>
                  <font-awesome-icon :icon="['fab', 'telegram']"/>
                </a>
              </li>
              <li>
                <a>
                  <font-awesome-icon :icon="['fab', 'vk']"/>
                </a>
              </li>
              <li>
                <a>
                  <font-awesome-icon :icon="['fab', 'app-store']"/>
                </a>
              </li>
              <li>
                <a>
                  <font-awesome-icon :icon="['fab', 'google-play']"/>
                </a>
              </li>
            </ul>
          </div>
          <div class="field">
            <label class="label">Название</label>
            <div class="control">
              <input class="input is-primary" type="text" placeholder="Ссылка на профиль _dapie">
            </div>
          </div>
          <div class="field">
            <p class="is-size-6 has-text-centered">Вводите <strong>ссылку</strong> на пост или на профиль</p><br>
            <div class="control has-icons-left">
              <input class="input is-primary" type="text" placeholder="https://instagram.com/_dapie">
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'link']"/>
              </span>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Создать</button>
            </div>
          </div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="createModalActive = false"></button>
    </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'

export default {
  middleware: ['auth'],
  components: {
    Nav,
    Footer
  },
  data() {
    return{
      createModalActive: false,
      links: undefined
    }
  },
  mounted: async function () {
    this.links = await this.$axios.get('/api/db/links').then((res) => res.data)
    console.log(Object.keys(this.links).length)
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
</style>
