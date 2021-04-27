<template>
  <main>
    <section class="section p-5">
      <div class="tile is-ancestor">
        <div class="is-tile is-parent">
          <div v-for="item in colOne" :key="item" class="tile m-4">
            <b-image class="card" :src="`/shirts/shirt-${item}.jpg`"></b-image>
          </div>
        </div>
        <div class="is-tile is-parent">
          <div v-for="item in colTwo" :key="item" class="tile m-4">
            <b-image class="card" :src="`/shirts/shirt-${item}.jpg`"></b-image>
          </div>
        </div>
        <div class="is-tile is-parent">
          <div v-for="item in colThree" :key="item" class="tile m-4">
            <b-image class="card" :src="`/shirts/shirt-${item}.jpg`"></b-image>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      colOne: [1, 2, 3, 12],
      colTwo: [4, 5, 6, 11],
      colThree: [7, 8, 9, 10],
    }
  },
}
</script>
