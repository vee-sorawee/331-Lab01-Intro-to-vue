const reviewList = {
  template:
    /* html */
    `
    <div class="review-container">
      <h3>Review:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} gave this {{ review.rating }} stars
          <br />
          "{{ review.review }}"
          <br />
          {{ review.recommend ? "Recommended" : "Not Recommend" }}
        </li>
      </ul>
    </div>
    `,
  props: {
    reviews: {
      type: Array,
    },
  },
  setup(props) {
    const reviews = props.reviews || [];
    return {
      reviews,
    };
  },
};
