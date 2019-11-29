<template>
  <div>
    <Nav />
    <Message ref="message" />
    <section class="hero is-white welcome">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Диплинки
          </h1>
          <h2 class="subtitle">
            Управление диплинками
          </h2>
          <a class="button is-primary" @click="createModal()">
            Создать диплинк
          </a>
        </div>
      </div>
    </section>
    <div class="container table-container">
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
          <tr v-if="links" v-for="link in links" :key="link.id">
            <th>{{ link.id }}</th>
            <td>
              <p>{{ link.name }}</p>
              <a :href="link.link">
                {{ link.link }}
              </a>
            </td>
            <td>
              <p>Редирект через ссылку-прокладку:</p>
              <a :href="'/o/' + link.id"> https://dclck.com/o/{{ link.id }} </a>
              <p>Редирект напрямую:</p>
              <a :href="'/do/' + link.id">
                https://dclck.com/do/{{ link.id }}
              </a>
            </td>
            <td>{{ link.clicks }}</td>
            <td>{{ link.paidClicks - link.clicks }}</td>
            <td>
              <a class="button is-primary" @click="payFor(link.id)">
                Оплатить
              </a>
              <a
                class="button is-danger is-outlined"
                @click="deleteLink(link.id)"
              >
                Удалить
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="modal" :class="{ 'is-active': createModalActive }">
        <div class="modal-background" @click="createModalActive = false"></div>
        <div class="modal-content">
          <div class="modal-container">
            <figure class="image container is-64x64">
              <img src="~assets/img/link-symbol.png" alt="" />
            </figure>
            <h1 class="title has-text-centered">Создать диплинк</h1>
            <div class="tabs is-primary is-fullwidth is-medium">
              <ul>
                <li :class="{ 'is-active': current == 'instagram' }">
                  <a @click="changeTo('instagram')">
                    <font-awesome-icon :icon="['fab', 'instagram']" />
                  </a>
                </li>
                <li :class="{ 'is-active': current == 'telegram' }">
                  <a @click="changeTo('telegram')">
                    <font-awesome-icon :icon="['fab', 'telegram-plane']" />
                  </a>
                </li>
                <li :class="{ 'is-active': current == 'vk' }">
                  <a @click="changeTo('vk')">
                    <font-awesome-icon :icon="['fab', 'vk']" />
                  </a>
                </li>
              </ul>
            </div>
            <div class="field">
              <label class="label">Тип ссылки</label>
              <div class="select is-primary is-fullwidth">
                <select
                  @change="changePlaceholder()"
                  v-model="selectedType"
                  :value="selectedType.name"
                >
                  <option v-for="type in types" :value="type">{{
                    type.name
                  }}</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Название</label>
              <div class="control">
                <input
                  class="input is-primary"
                  type="text"
                  :placeholder="linkNamePlaceholder"
                  v-model="linkName"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Ссылка</label>
              <div class="control has-icons-left">
                <input
                  class="input is-primary"
                  type="text"
                  :placeholder="linkPlaceholder"
                  v-model="inputLink"
                />
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'link']" />
                </span>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link" @click="createLink()">
                  Создать
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="createModalActive = false"
        ></button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "~/components/Nav.vue";
import Footer from "~/components/Footer.vue";
import Message from "~/components/Message.vue";

export default {
  middleware: ["auth"],
  components: {
    Nav,
    Footer,
    Message
  },
  data() {
    return {
      createModalActive: false,
      links: undefined,
      current: "",
      linkName: "",
      linkNamePlaceholder: "",
      types: [],
      selectedType: {
        name: ""
      },
      linkPlaceholder: "",
      inputLink: "",
      wantDelete: -1
    };
  },
  methods: {
    createModal() {
      this.createModalActive = true;
      (this.linkName = ""), (this.inputLink = "");
    },
    changeTo(next) {
      this.current = next;
      switch (next) {
        case "instagram":
          this.linkNamePlaceholder = "Instagram ссылка";
          this.types = [
            {
              name: "На пост",
              placeholder: "https://www.instagram.com/p/B4z-mzwFm3-/",
              regex: /https:\/\/www\.instagram\.com\/p\/([^\/]+)\/?$/,
              ios: "",
              android:
                "intent://instagram.com/p/$1/#Intent;package=com.instagram.android;scheme=https;end"
            },
            {
              name: "На профиль",
              placeholder: "https://www.instagram.com/_dapie/",
              regex: /https:\/\/www\.instagram\.com\/([^\/]+)\/?$/,
              ios: "instagram://user?username=$1",
              android:
                "intent://instagram.com/_u/$1/#Intent;package=com.instagram.android;scheme=https;end"
            },
            {
              name: "На тег",
              placeholder: "https://instagram.com/explore/tags/test",
              regex: /https:\/\/www\.instagram\.com\/explore\/tags\/([^\/]+)\/?$/,
              ios: "instagram://tag?name=$1",
              android:
                "intent://instagram.com/explore/tags/$1/#Intent;package=com.instagram.android;scheme=https;end"
            }
          ];
          break;
        case "telegram":
          this.linkNamePlaceholder = "Telegram ссылка";
          this.types = [
            {
              name: "На профиль",
              placeholder: "https://t.me/dapie",
              regex: /https:\/\/t\.me\/([^\/]+)\/?$/,
              ios: "tg://resolve?domain=$1",
              android:
                "intent://resolve?domain=$1#Intent;package=org.telegram.messenger;scheme=tg;end"
            },
            {
              name: "На канал/чат",
              placeholder: "https://t.me/joinchat/GWHnrhYHe_aEOrbrkshTtA",
              regex: /https:\/\/t\.me\/joinchat\/([^\/]+)\/?$/,
              ios: "tg://join?invite=$1",
              android:
                "intent://join?invite=$1#Intent;package=org.telegram.messenger;scheme=tg;end"
            }
          ];
          break;
        case "vk":
          this.linkNamePlaceholder = "VK ссылка";
          this.types = [
            {
              name: "Ссылка vk.com",
              placeholder: "https://vk.com/wall-22822305_982167",
              regex: /https:\/\/www\.(vk\.com\/[^\/]+\/?)$/,
              ios: "vk://$1",
              android:
                "intent://$1#Intent;package=com.vkontakte.android;scheme=vkontakte;end"
            },
            {
              name: "Ссылка vk.me",
              placeholder: "https://vk.me/alfabank",
              regex: /https:\/\/www\.(vk\.me\/.+\/?)$/,
              ios: "vk://$1",
              android:
                "intent://$1#Intent;package=com.vkontakte.android;scheme=vkontakte;end"
            }
          ];
          break;
      }
      this.selectedType = this.types[0];
      this.changePlaceholder();
    },
    changePlaceholder() {
      this.linkPlaceholder = this.selectedType.placeholder;
      this.inputLink = "";
    },
    async createLink() {
      const result = this.selectedType.regex.exec(this.inputLink);
      if (!result) {
        this.$refs.message.showMessage("Неверная ссылка", true);
        return;
      }

      if (this.current == "instagram" && this.selectedType.name == "На пост")
        this.selectedType.ios =
          "instagram://media?id=" + (await this.getInstaPostId(this.inputLink));

      const iosLink = this.inputLink.replace(
        this.selectedType.regex,
        this.selectedType.ios
      );
      const androidLink = this.inputLink.replace(
        this.selectedType.regex,
        this.selectedType.android
      );
      await this.$axios
        .post("/api/db/links/add", {
          service: this.current,
          link: this.inputLink,
          iosLink: iosLink,
          androidLink: androidLink,
          name: this.linkName ? this.linkName : this.linkNamePlaceholder
        })
        .then(async res => {
          this.createModalActive = false;
          this.links = await this.$axios
            .get("/api/db/links")
            .then(res => res.data);
          this.$refs.message.showMessage("Диплинк создан");
        })
        .catch(e =>
          this.$refs.message.showMessage("Ошибка: " + e.response.data, true)
        );
    },
    async getInstaPostId(url) {
      return await this.$axios
        .get("/api/inst/mediaId?url=" + url)
        .then(res => (res.data.mediaId ? res.data.mediaId : ""));
    },
    async deleteLink(id) {
      if (this.wantDelete != id) {
        this.wantDelete = id;
        this.$refs.message.showMessage("Нажмите еще раз, для удаления", true);
        return;
      }
      await this.$axios
        .post("/api/db/links/delete", { id })
        .then(async res => {
          this.links = await this.$axios
            .get("/api/db/links")
            .then(res => res.data);
        })
        .catch(e =>
          this.$refs.message.showMessage("Ошибка: " + e.response.data, true)
        );
      this.$refs.message.showMessage("Диплинк удален");
    }
  },
  mounted: async function() {
    this.changeTo("instagram");
    this.links = await this.$axios.get("/api/db/links").then(res => res.data);
  }
};
</script>

<style scoped lang="scss">
.modal-container {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  width: 500px;
  margin: 0 auto;
}
@media only screen and (max-width: 500px) {
  .table-container{
    overflow: auto;
  }
  .modal-content{
    max-height: none;
  }
  .modal .modal-container{
    display: block;
    margin-top:72px;
    width: 100%;
    transition: all .3s ease-in;
    animation: .5s ease-in-out move_eye;
  }
  @keyframes move_eye { 
    from { margin-top:100vh; opacity: 0;} 
    to { margin-top:72px; opacity: 1;}  
  }
}
</style>
