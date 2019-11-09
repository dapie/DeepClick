<template>
  <div class="container">
    <nav class="navbar is-spaced is-transparent" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <img src="~assets/logo.png" width="136">
        </nuxt-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link to="/deeplinks"class="navbar-item">
            Диплинки
          </nuxt-link>

          <a class="navbar-item">
            Цены
          </a>

          <a class="navbar-item">
            Поддержка
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            mytest@mail.ru
          </div>
          <div class="navbar-item">
            <!-- <div class="buttons">
              <a class="button is-primary" @click="$emit('openRegister')">
                <strong>Регистрация</strong>
              </a>
              <a class="button is-light" @click="$emit('openLogin')">
                Вход
              </a>
            </div> -->
            <a class="button is-primary is-outlined" @click="$emit('openLogin')">
                Выход
            </a>
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
