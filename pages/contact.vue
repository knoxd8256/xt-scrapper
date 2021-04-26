<template>
  <main>
    <section class="section hero is-link">
      <article class="container">
        <h1 class="title">Contact the team!</h1>
        <p class="block">
          Please fill in the form below to ask your questions and get in contact
          with our team. We'll do our best to get back to you in a timely
          manner.
        </p>
      </article>
    </section>
    <section class="section">
      <article
        class="container has-background-primary-light has-text-primary-dark has-wood-frame p-2"
      >
        <form
          v-if="!success"
          id="contact-form"
          class="container"
          @submit.prevent="onSubmit"
        >
          <b-field label="Name">
            <b-input v-model="name"></b-input>
          </b-field>
          <b-field label="Email">
            <b-input v-model="email" type="email"></b-input>
          </b-field>
          <b-field label="Message">
            <b-input
              v-model="message"
              maxlength="200"
              type="textarea"
            ></b-input>
          </b-field>
          <b-button @click="onSubmit" type="submit">Submit</b-button>
        </form>
        <section v-else class="container">
          <h2 class="title">Thanks for reaching out!</h2>
          <p class="block">We'll be in touch soon.</p>
        </section>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ContactPage',

  data: () => ({
    email: '',
    message: '',
    name: '',
    success: false,
    error: false,
  }),

  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e)
    }
  },

  methods: {
    async onSubmit() {
      if (this.name && this.email && this.message) {
        const token = await this.$recaptcha.execute('contact')
        this.$axios
          .post('https://extraterrestrialgardener.com/api/contact', {
            name: this.name,
            email: this.email,
            message: this.message,
            token,
          })
          .then(() => (this.success = true))
          .catch(() => (this.error = true))
      } else {
        this.error = true
        this.$buefy.snackbar.open({
          message: 'Please fill out all form fields completely.',
          type: 'is-danger',
          position: 'is-top',
        })
      }
    },
  },
}
</script>
