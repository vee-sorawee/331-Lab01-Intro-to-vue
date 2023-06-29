const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const product = ref("Boots");
    const brand = ref("SE 331");
    const onSale = ref(false);
    // const image = ref("./assets/images/socks_green.jpg");
    // const inStock = ref(true);
    const inventory = ref(100);
    const details = ref(["50% cotton", "30% wool", "20% polyester"]);
    const variants = ref([
      {
        id: 2234,
        color: "green",
        image: "./assets/images/socks_green.jpg",
        quaitity: 50,
      },
      {
        id: 2235,
        color: "blue",
        image: "./assets/images/socks_blue.jpg",
        quantity: 0,
      },
    ]);
    const selectedVariant = ref(0);
    const cart = ref(0);
    const addToCart = () => {
      cart.value += 1;
    };
    const updateImage = (variantImage) => {
      image.value = variantImage;
      console.log(variantImage);
    };
    const changeInStock = () => {
      inStock.value = !inStock.value;
    };
    const title = computed(() => {
      if (!onSale.value) {
        console.log(0);

        return brand.value + " " + product.value;
      }
      if (onSale.value) {
        console.log(1);
        console.log(onSale);

        return brand.value + " " + product.value + " is on sale";
      }
    });

    const updateVariant = (index) => {
      selectedVariant.value = index;
    };

    const image = computed(() => {
      return variants.value[selectedVariant.value].image;
    });

    const inStock = computed(() => {
      return variants.value[selectedVariant.value].quantity;
    });

    return {
      title,
      image,
      inStock,
      inventory,
      details,
      variants,
      cart,
      addToCart,
      updateImage,
      changeInStock,
      updateVariant,
    };
  },
}).mount("#app");
