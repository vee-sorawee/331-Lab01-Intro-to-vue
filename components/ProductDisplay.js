const productDisplay = {
  template:
    /* html */
    `<div class="product-display">
<div class="product-container">
  <div class="product-image" :class="{ 'out-of-stock-img': !inStock }">
    <img :src="image" alt="" />
  </div>
</div>
</div>
<div class="product-info">
<h1>{{title}}</h1>
<p v-if=" inStock && inventory > 10">In Stock</p>
<p v-else-if="inStock && inventory <= 10 && inventory > 0">
  Almost out of stock
</p>
<p v-else>Out of Stock</p>
<ul>
  <li v-for="detail in details">{{detail}}</li>
</ul>
<div
  v-for="(variant,index) in variants"
  :key="variant.id"
  @mouseover="updateVariant(index)"
  class="color-circle"
  :style="{backgroundColor: variant.color}"
>
  {{variant.color}}
</div>
<button
  class="button"
  :disabled="!inStock"
  :class="{disabledButton: !inStock}"
  @click="addToCart"
>
  Add To Cart
</button>
<button class="button" @click="changeInStock">Change Stock</button>
</div>`,

  setup() {
    const product = ref("Boots");
    const brand = ref("SE 331");
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

    const updateVariant = (index) => {
      selectedVariant.value = index;
    };

    const image = computed(() => {
      return variants.value[selectedVariant.value].image;
    });

    const inStock = computed(() => {
      return variants.value[selectedVariant.value].quantity;
    });
    const addToCart = () => {
      cart.value += 1;
    };

    const updateImage = (variantImage) => {
      image.value = variantImage;
      console.log(variantImage);
    };

    const title = computed(() => {
      return brand.value + " " + product.value;
    });

    // const changeInStock = () => {
    //   inStock.value = !inStock.value;
    // };

    return {
      title,
      image,
      inStock,
      inventory,
      details,
      variants,
      addToCart,
      updateImage,
      //   changeInStock,
      updateVariant,
    };
  },
};
