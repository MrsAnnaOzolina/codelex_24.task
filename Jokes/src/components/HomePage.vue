<!-- <script lang="ts">
import { useFetch } from "./store"

export default {
  data() {
    return {
      useFetch
    }
  }
}
</script> -->

<script setup lang="ts">
import { useFetch } from "./store"

const { data, error } = useFetch('https://v2.jokeapi.dev/joke/Programming?type=single&amount=10')



</script>

<template>
  


 
<div class="jokeCards">


 <div v-for='result in data?.jokes' class="row" >

      <div class="card blue-grey darken-1" >
        <div class="card-content white-text">
          <p>{{ result.joke }}</p>
        </div>
        <div class="card-action">
          <a href="#">Add to favorites</a>
        </div>
      </div>
  </div> 

 

</div>

</template>
<style>
.jokeCards{
    display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 45vw);
  gap: 10px;
    
}

</style>