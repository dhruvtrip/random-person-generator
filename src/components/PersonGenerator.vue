<template>
  <div class="app">
    <img :class="gender" :src="picture" :alt="`${firstName} ${lastName}`">
    <h2>{{`${this.firstName} ${this.lastName}`}}</h2>
    <h3>{{this.email}}</h3>
    <button :class="gender" @click="getRandomUserData()">Generate a random profile</button>
  </div>
</template>
<script>

export default {
  name: 'PersonGenerator',

  data() {
    return {
      // First, Webpack only knows how to convert a certain limited set of import path specifications into appropriate URLs in the final build. Using a data variable as the value of a :src prop is not a supported syntax: Webpack just sees that as a generic variable and will not transform it.
      picture: require('../assets/logo.png'),
      firstName: 'Vue',
      lastName: 'JS',
      email: 'vue.js@email.com',
      gender: 'none',
    }},
  
  
  methods: {
    async getRandomUserData() {
      const data = await fetch('https://randomuser.me/api/');
      const {results} = await data.json();

      console.log(results);
      
      const { name, email, gender, picture} = results[0];
      this.picture = picture.large;
      this.firstName = name.first;
      this.lastName = name.last;
      this.email = email;
      this.gender = gender;

    }
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: Arial, Helvetica, sans-serif;
}

h2,
h3 {
  margin-bottom: 1rem;
  font-weight: normal;
}

img {
  border-radius: 50%;
  border: 5px #333 solid;
  margin-bottom: 1rem;
}

.male {
  border-color: steelblue;
  background-color: steelblue;
}

.female {
  border-color: pink;
  background-color: pink;
  color: #333;
}

.none {
  border-color: rgb(245, 243, 243);
  background-color: rgb(223, 217, 217);
  color: #333;
}

button {
  cursor: pointer;
  display: inline-block;
  background: #333;
  color: white;
  border-radius: 1em;
  font-size: 18px;
  border: 0;
  padding: 1rem 1.5rem;
}

button:focus {
  outline: none;
}

button:hover {
  transform: scale(0.98);
}

</style>
