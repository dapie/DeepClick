<template>
	<section class="hero is-fullheight has-text-centered">
	  <div class="hero-body">
	    <div class="container">
	      <nuxt-link to="/">
				<img src="~assets/logo-w.png" alt="" style="height: 45px;">
			</nuxt-link>
			<a class="button is-primary is-fullwidth is-medium" :href="link">
				Открыть в {{this.deeplink.service.charAt(0).toUpperCase() + this.deeplink.service.slice(1)}}
			</a>
			<nav class="breadcrumb is-centered">
			  <ul>
			    <li><nuxt-link to="/">Создать диплинк</nuxt-link></li>
			    <li><nuxt-link to="/#support">Помощь</nuxt-link></li>
			  </ul>
			</nav>
	    </div>
	  </div>
	</section>
</template>

<style scoped lang="scss">
	.container{
		max-width: 500px;
	}
	.button{
		box-shadow: 0 0.5em 1em -0.125em rgba(107, 102, 255, 0.3), 0 0px 0 1px rgba(107, 102, 255, 0.05);
		margin-top: 100px;
		margin-bottom: 100px;
	}
	@media (prefers-color-scheme: dark) {
      .hero-body{
        background: $dark;
      }   
      .breadcrumb a:hover{
      	color: #fff;
      }
  	}
</style>

<script>
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData ({ params, error, $axios }) {
    const deeplink = await $axios.get('/api/db/links/' + params.id)
    	.then((res) => res.data)
    	.catch((e) => error({ message: e.response.data, statusCode: 404 }))
    return {deeplink}
  },
  data(){
  	return{
  		link: undefined
  	}
  },
  mounted: function () {
  	this.link = this.$device.isDesktop ? this.deeplink.link :
    	this.$device.isIos ? this.deeplink.iosLink :
    	this.deeplink.androidLink
  }
}
</script>