<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <p>{{ selectedComponent}}</p>
        <component :is="selectedComponent">
          <p>Default Component!</p>
        </component>
        <!-- <app-quote quote="A wonderful quote!!"></app-quote> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue';
  import Author from './components/Author.vue';
  import New from './components/New.vue';
  export default {
    data: function() {
      return {
        selectedComponent: 'appQuote'
      }
    },
    
    components: {
      appQuote: Quote,
      appAuthor: Author,
      appNew: New
    }
  }
</script>

<style>

</style>
