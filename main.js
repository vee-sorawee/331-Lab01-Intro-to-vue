const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {
    const cart = ref(0);
    const premium = ref(false);
    const details = ref(["50% cotton", "30% wool", "20% polyester"]);
    return {
      cart,
      premium,
      details,
    };
  },
});

app.component("product-display", productDisplay);
app.component("product-details", productDetails);

app.mount("#app");
