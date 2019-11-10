<template>
  <div class="container">
    <nav class="navbar is-spaced is-transparent" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <img src="~assets/logo.png" width="136">
        </nuxt-link>

        <a role="button" class="navbar-burger burger is-active" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu is-active">
        <div class="navbar-start">
          <nuxt-link to="/deeplinks"class="navbar-item" v-if="$auth.loggedIn">
            Диплинки
          </nuxt-link>

          <a class="navbar-item">
            Цены
          </a>

          <a class="navbar-item">
            Поддержка
          </a>
        </div>
        <div class="navbar-end" v-if="$auth.loggedIn">
          <div class="navbar-item">
            <a href="" class="navbar-item">{{$auth.user.email}}</a>
            <a class="button is-primary is-outlined" @click="$auth.logout()">
              Выход
            </a>
          </div>
        </div>
        <div class="navbar-end" v-else>
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" @click="$emit('openRegister')">
                <strong>Регистрация</strong>
              </a>
              <nuxt-link class="button is-light" to="/login">
                Вход
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.navbar.is-spaced{
    padding: 1rem 0 !important;
}
</style>
