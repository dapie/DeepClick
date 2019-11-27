<template>
	<section class="hero is-fullheight has-text-centered">
		<div class="hero-body">
			<div class="container">
				<nuxt-link to="/" class="is-white">
					<img
						src="~assets/img/logo.png"
						alt=""
						style="height: 45px;"
					/>
				</nuxt-link>
				<nuxt-link to="/" class="is-dark">
					<img
						src="~assets/img/logo-w.png"
						alt=""
						style="height: 45px;"
					/>
				</nuxt-link>
				<a
					class="button is-primary is-fullwidth is-medium"
					@click="clickDeeplink()"
				>
					Открыть в
					{{
						this.deeplink.service.charAt(0).toUpperCase() +
							this.deeplink.service.slice(1)
					}}
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
.container {
	max-width: 500px;
}
.button {
	box-shadow: 0 0.5em 1em -0.125em rgba(107, 102, 255, 0.3),
		0 0px 0 1px rgba(107, 102, 255, 0.05);
	margin-top: 100px;
	margin-bottom: 100px;
}
.is-white{
	display: block;
}
.is-dark{
	display: none;
}
@media (prefers-color-scheme: dark) {
	.hero-body {
		background: $dark;
	}
	.breadcrumb a:hover {
		color: #fff;
	}
	.is-dark{
		display: block;
	}
	.is-white{
		display: none;
	}
}
</style>

<script>
export default {
	async middleware({ params, redirect }) {
		if (!/^\d+$/.test(params.id)) return redirect("/");
	},
	async asyncData({ params, error, $axios, isDesktop, isIos, redirect }) {
		let deeplink = await $axios
			.get("/api/db/links/" + params.id)
			.then(res => res.data)
			.catch(e => error({ message: e.response.data, statusCode: 404 }));
		if (!deeplink.message && !deeplink.works)
			return error({ message: "Ссылка не оплачена", statusCode: 404 });
		if (deeplink.message) return;
		const id = params.id;
		const link = isDesktop
			? deeplink.link
			: isIos
			? deeplink.iosLink
			: deeplink.androidLink;
		return { deeplink, id, link };
	},
	methods: {
		async clickDeeplink() {
			await this.$axios.post("/api/db/links/click", {
				id: this.id
			});
			window.location.href = this.link;
		}
	},
	mounted: function() {
		setTimeout(() => this.clickDeeplink(), 3000);
	}
};
</script>
