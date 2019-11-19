<template>
	<div class="container has-text-centered">
		<img src="~assets/logo.png" alt="" style="height: 45px;">
		<button class="button is-primary is-fullwidth is-medium">
			Открыть в Instagram
		</button>
		<nav class="breadcrumb is-centered">
		  <ul>
		    <li><a href="#">Создать диплинк</a></li>
		    <li><a href="#">Помощь</a></li>
		  </ul>
		</nav>
	</div>
</template>

<style lang="scss">
	body{
		padding: 20px;
	}
	.container{
		margin-top: 60px;
		max-width: 500px;
	}
	.button{
		box-shadow: 0 0.5em 1em -0.125em rgba(107, 102, 255, 0.3), 0 0px 0 1px rgba(107, 102, 255, 0.05);
		margin-top: 100px;
		margin-bottom: 100px;
	}
	@media (prefers-color-scheme: dark) {
    html {
        background-color: $dark;
        color: white;
    }
	}
</style>

<script>
export default {
  data() {
    return{
    	link: ""
    }
  },
  methods: {
    // login() {
    //   this.$auth.loginWith('local', {
    //     data: {
    //       email: 'admin',
    //       password: '123'
    //     }
    //   })
    // }
  },
  mounted() {
  	this.link = "https://instagram.com/_dapie"
  	if(this.$device.isDesktop) return
  	this.link = this.$device.isIos ? "instagram://user?username=_dapie" : "intent://instagram.com/_u/_dapie/#Intent;package=com.instagram.android;scheme=https;end"
  }
}
</script>