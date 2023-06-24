const { createApp, ref } = Vue;

createApp({
  setup() {
    const product = ref("Boots");
    const image = ref("./assets/images/socks_green.jpg");
    const inStock = ref(true);
    const inventory = ref(100);
    const onSale = ref(true);
    return {
      product,
      image,
      inStock,
      inventory,
      onSale,
    };
  },
}).mount("#app");
