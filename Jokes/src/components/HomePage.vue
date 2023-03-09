

<script lang="ts">
import axios, { type AxiosResponse } from "axios"


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
      results: []
    }
  },
  mounted() {
    axios.get<Promise<JokesObject>>(url).then(response => {
      this.results = response.data
    });

  },
  methods: {
    displatValue: function (joke: string) {
      axios.post("http://localhost:3004/", {
        joke: joke
      })
    },
    changeJokeCategory: function (event: any) {
      axios.get(`https://v2.jokeapi.dev/joke/${event.target.value}?type=single&amount=10`).then(response => {
        this.results = response.data
      });
    }
  }

}



</script>

<template>
  <div class="input">
    <label>Choose joke category</label>
    <select class="browser-default" @change="changeJokeCategory($event)">
      <option value="Programming">Programming</option>
      <option value="Misc">Misc</option>
      <option value="Dark">Dark</option>
      <option value="Pun">Pun</option>
    </select>
  </div>


  <div class="jokeCards">
    <div v-for='(result, index) in results?.jokes' :key="result.joke" :value="index" class="row">
      <div class="col s12 m12">
        <div class="card-panel teal">
          <p class="white-text">
          <p>{{ result.category }} joke:</p>
          <span class="result.joke">{{ result.joke }}
          </span>
          </p>
          <button @click="displatValue(result.joke)" class="waves-effect waves-light btn button">Add to favorites</button>
        </div>
      </div>
    </div>

  </div>
</template>
<style>

.jokeCards {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 45vw);
  gap: 10px;
}

.input {
 display: grid;
 justify-content: center;
 margin: 30px 0 30px 0;
}

.button {
  background-color: #ee6e73;
}
</style>

