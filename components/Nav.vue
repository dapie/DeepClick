<template>
  <div class="container">
    <nav
      class="navbar is-spaced is-transparent"
      :class="{ 'is-active': navActive }"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <img src="~assets/img/logo.png" width="136" />
        </nuxt-link>

        <a
          role="button"
          class="navbar-burger burger"
          :class="{ 'is-active': navActive }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="navActive = !navActive"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': navActive }"
      >
        <div class="navbar-start">
          <nuxt-link to="/deeplinks" class="navbar-item" v-if="$auth.loggedIn">
            Диплинки
          </nuxt-link>

          <nuxt-link to="/#price" class="navbar-item">
            Цены
          </nuxt-link>

          <nuxt-link to="/#support" class="navbar-item">
            Поддержка
          </nuxt-link>
        </div>
        <div class="navbar-end" v-if="$auth.loggedIn">
          <div class="navbar-item">
            {{ $auth.user.email }}
          </div>
          <div class="navbar-item">
            <a class="button is-primary is-outlined" @click="$auth.logout()">
              Выход
            </a>
          </div>
        </div>
        <div class="navbar-end" v-else>
          <div class="navbar-item">
            <div class="buttons">
              <nuxt-link class="button is-primary" to="/register">
                <strong>Регистрация</strong>
              </nuxt-link>
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

<style scoped>
.navbar.is-spaced {
  padding: 1rem 0 !important;
}
nav.is-active {
  background: white;
  box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
}
.navbar-menu {
  box-shadow: none;
}
</style>

<script>
export default {
  data() {
    return {
      navActive: false
    };
  }
};
</script>
