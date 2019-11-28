<template> </template>

<script>
export default {
  async middleware({ params, redirect, $axios, isDesktop, isIos, error }) {
    if (!/^\d+$/.test(params.id)) return redirect("/");
    const id = params.id;
    const deeplink = await $axios
      .get("/api/db/links/" + params.id)
      .then(res => res.data)
      .catch(e => error({ message: e.response.data, statusCode: 404 }));
    if (!deeplink.message && !deeplink.works)
      return error({ message: "Ссылка не оплачена", statusCode: 404 });
    if (deeplink.message) return;
    const link = isDesktop
      ? deeplink.link
      : isIos
      ? deeplink.iosLink
      : deeplink.androidLink;
    await $axios.post("/api/db/links/click", {
      id: id
    });
    return redirect(link);
  }
};
</script>
