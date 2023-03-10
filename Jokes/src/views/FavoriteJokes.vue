<script lang="ts">
import axios from "axios"
import { onMounted } from "vue";

type Jokes = {
  _id: string,
  joke: string,
  __v:number
}
const url = "http://localhost:3005/";

export default {
  data() {
    return {
      results: [] as Jokes[]
    }
  },
  mounted() {
    axios.get(url).then(response => {
      this.results = response.data
    });

  },
  methods: {
    removeJoke: function (_id: string) {
      axios.delete(`http://localhost:3005/${_id}`).then(() => {
        axios.get(url).then(response => {
          this.results = response.data
        });
      })
    }
  }
}

</script>

<template>
  <div class="jokes">
    <h1 class="jokes__title">My favorite joke list:</h1>
    <div class="col s12 m12 jokes__card" v-for='result in results'>
      <div class="card horizontal">
        <div class="card-stacked blue lighten-4">
          <div class="card-content">
            <p>{{ result.joke }}</p>
            <p class="result._id"></p>
          </div>
          <div class="card-action">
            <button @click="$event => removeJoke(result._id)" class="waves-effect waves-light btn jokes__button">Remove
              from favorites</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.jokes__title {
  display: grid;
  justify-items: center;
}

.jokes__button {
  background-color: #ee6e73;
}

.jokes__card {
  margin: 30px 100px 30px 100px; 
}
</style>



