

<script lang="ts">
import axios from "axios"


type Jokes = {
  category: string,
  type: string,
  joke: string,
  flags: {
    nsfw: boolean,
    religious: boolean,
    political: boolean,
    racist: boolean,
    sexist: boolean,
    explicit: boolean
  },
  id: number,
  safe: boolean,
  lang: string
}

type JokesObject = {
  error: boolean,
  amount: number,
  jokes: Jokes[]
}

let url = "https://v2.jokeapi.dev/joke/Programming?type=single&amount=10";

export default {
  data() {
    return {
      results: {} as JokesObject,
    }
  },
  mounted() {
    axios.get<JokesObject>(url).then(response => {
      this.results = response.data
    });

  },
  methods: {
    displatValue: function (joke: string) {
      axios.post("http://localhost:3005/", {
        joke: joke
      })
    },
    changeJokeCategory: function (event: any) {
      axios.get(`https://v2.jokeapi.dev/joke/${event.target.value}?type=single&amount=10`).then(response => {
        this.results = response.data
      });
    },
  }
}

</script>

<template>
  <div class="hero">
    <h1>Top jokes</h1>
    <h5>Choose joke category to read 10 top jokes</h5>

    <label>Choose joke category</label>
    <select class="browser-default input" @change="changeJokeCategory($event)">
      <option value="Programming">Programming</option>
      <option value="Misc">Misc</option>
      <option value="Dark">Dark</option>
      <option value="Pun">Pun</option>
    </select>
  </div>
  <div class="jokeCards">
    <div class="card-panel teal" v-for='(result, index) in results.jokes' :key="result.joke" :value="index">
      <p class="white-text">
      <p>{{ result.category }} joke:</p>
      <span class="result.joke">{{ result.joke }}
      </span>
      </p>
      <button @click="displatValue(result.joke)" class="waves-effect waves-light btn button">
        Add to favorites
      </button>
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

body {
  font-family: 'Nunito', sans-serif;
}

.jokeCards {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 45vw);
  gap: 50px;
}

.hero {
  display: grid;
  justify-items: center;
  margin: 30px 0 30px 0;
  gap: 20px;
}

.button {
  background-color: #ee6e73;
}

.input {
  max-width: 200px;
}
</style>

