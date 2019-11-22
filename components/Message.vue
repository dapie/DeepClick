<template>
  <transition name="slide-fade">
    <article class="message" :class="{'is-success': !error, 'is-danger': error}" v-if="show">
      <div class="message-body">
        {{text}}
      </div>
    </article>
  </transition>
</template>

<script>
export default {
  data() {
    return{
      show: false,
      text: "",
      error: false,
      timeout: undefined
    }
  },
  methods: {
    showMessage(text, error) {
      this.text = text
      this.error = error
      this.show = true
      let self = this
      if(this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        self.show = false
      }, 3000)
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  animation: slide-up .5s;
}
.slide-fade-leave-active {
  animation: slide-up .5s reverse;
}
@keyframes slide-up {
  0% {
  	opacity: 0;
    transform: translateY(150%) translateX(-50%);
  }
  100% {
  	opacity: 1;
    transform: translateY(0) translateX(-50%);
  }
}
  .message{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 30px;
    z-index: 99;
  }
</style>