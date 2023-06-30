const { createApp, ref, computed, reactive } = Vue;

const app = createApp({
  setup() {
    const cart = ref([]);
    const premium = ref(false);
    const updateCart = (id) => {
      cart.value.push(id);
    };
    return {
      cart,
      premium,
      updateCart,
    };
  },
});

app.component("product-display", productDisplay);
app.component("review-form", reviewForm);
app.component("review-list", reviewList);

app.mount("#app");
