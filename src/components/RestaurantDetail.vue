<template>
  <div>
   <h1> DETAILS DU RESTAURANT QUI A POUR ID : {{id}} </h1>
   <ul>
   <li>nom: {{restaurant.name}}</li>
    <li>cuisine: {{restaurant.cuisine}}</li>
    <li>ville: {{restaurant.borough}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'restaurant',
  props: {
  },
  computed: {
      id(){
          return this.$route.params.id
      }
    },
    data: function(){
        return{
            restaurant:null

        }
    },
     mounted() {
        console.log("AVANT AFFICHAGE")
        console.log("ID = " + this.id)
        let url = "http://localhost:8080/api/restaurants/" + this.id
        fetch(url)
         .then((responseJSON) => {
            responseJSON.json().then((data) => {
              this.restaurant = data.restaurant;
            });
          })
        }
     
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
