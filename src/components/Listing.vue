<template>
  <section class="listings">
    <article v-for="item in $root.auto_listing" v-bind:auto="item" v-bind:key="item.id"  v-if="item.Active">

      <div class="listings-row">
        <div class="listings-row_thumb" :style="{ 'background-image': 'url(' + item.Image + ')' }"></div>
        <div class="listings-row_meta">
          <h2>{{item.Year}} {{item.Make}} {{item.Model}}</h2>
          <p>
            <em>Price:</em> <strong>{{item.Price}}</strong>
          </p>
          <p>
            <em>Type:</em> <strong>{{item.Type}}</strong>
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'listings'
}
</script>
