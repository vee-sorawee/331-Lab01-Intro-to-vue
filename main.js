const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {
    const cart = ref([2234, 2235, 0, 0]);
    const premium = ref(true);
    const updateCart = (id) => {
      console.log(cart.value[0]);
      if (id == 2234) {
        cart.value[2] = cart.value[2] + 1;
      } else {
        cart.value[3] = cart.value[3] + 1;
      }
    };

    const deleteCart = (id) => {
      console.log(cart.value[0]);
      if (id == 2234) {
        cart.value[2] = cart.value[2] - 1;
      } else {
        cart.value[3] = cart.value[3] - 1;
      }
    };

    return {
      cart,
      premium,
      updateCart,
      deleteCart,
    };
  },
});

app.component("product-display", productDisplay);

app.mount("#app");
