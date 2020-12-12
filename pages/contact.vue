<template>
  <main>
    <section class="section hero is-primary">
      <article class="container">
        <h1 class="title">Contact the team!</h1>
        <p class="block">
          Please fill in the form below to ask your questions, place your
          orders, or sign up to receive updates on new designs and limited
          specialty drops.
        </p>
      </article>
    </section>
    <section
      class="section content has-background-primary-light has-text-primary-dark m-2"
    >
      <form class="container" @submit.prevent>
        <b-field label="Name">
          <b-input v-model="name"></b-input>
        </b-field>
        <b-field label="Email">
          <b-input type="email"></b-input>
        </b-field>
        <b-field label="Message">
          <b-input maxlength="200" type="textarea"></b-input>
        </b-field>
        <b-button type="is-link">Submit</b-button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ContactPage',
}
</script>
