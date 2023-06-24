const { createApp, ref } = Vue;

createApp({
  setup() {
    const product = ref("Boots");
    // const description = ref(
    //   "These boots are a perfect blend of style and functionality, designed to provide both comfort and durability. Crafted with meticulous attention to detail, they are made from high-quality materials that ensure long-lasting wear."
    // );
    const image = ref("./assets/images/socks_green.jpg");
    const link = ref("https://www.camt.cmu.ac.th/");
    return {
      product,
      image,
      link,
      //   description,
    };
  },
}).mount("#app");
