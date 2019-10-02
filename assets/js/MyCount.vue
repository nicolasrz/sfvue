
<script>
export default {
  props: ["count"],
  data() {
    return {
      newCount: this.count ? this.count : 0
    };
  },
  methods: {
    increment() {
      this.newCount++;
    }
  }
};
</script>