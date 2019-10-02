<template>
  <div class="card" style="width: 18rem;" v-if="contact != null">
    <img src class="card-img-top" alt />
    <div class="card-body">
      <h5 class="card-title">{{ contact.firstname }} {{ contact.lastname }}</h5>
      <p class="card-text">{{ contact.description }}</p>
      <p>
        <button class="btn btn-danger" @click="deleteContact">Supprimer</button>
      </p>
    </div>
  </div>
</template>

<script>
import Bus from "./Bus.js";
export default {
  data() {
    return {
      contact: {
        firstname: "",
        lastname: "",
        description: ""
      },
      index: ""
    };
  },
  mounted() {
    Bus.$on("send-contact", (contact, i) => {
      this.contact = contact;
      this.index = i;
    });
  },
  methods: {
    deleteContact() {
      this.contact = null;
      Bus.$emit("delete-contact", this.index);
    }
  }
};
</script>