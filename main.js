const { createApp, ref } = Vue;

createApp({
  setup() {
    const product = ref("Socks");
    return {
      product,
    };
  },
}).mount("#app");
