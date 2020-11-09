<template>
  <div >
    <h1>LISTE DES RESTAURANTS</h1>
    
    <form @submit.prevent="ajouterRestaurant($event)">
        <label>
            Nom : <input type="text" required v-model="nom">
        </label>
        <label>
            Cuisine : <input type="text" required v-model="cuisine">
        </label>
        <label>
            Ville : <input type="text" required v-model="ville">
        </label>
        <button>Ajouter</button>
    </form>

    <h2>
        <label>RECHERCHER PAR NOM: 
            <input type="text" 
                v-model="nomRecherche"
                @input="getDataFromServer()"
            >
        </label>
    </h2>

    <h2>NOMBRE DE RESTAURANTS : {{nbRestaurants}}</h2>
    <p>Nombre de restaurants par page : 
        <input type="range" min=5 max=100 step=1 
            v-model="pagesize"
            v-on:input="getDataFromServer()"
        > {{pagesize}}
    </p>

    <md-button  class="md-raised" :disabled="page==0" @click="pagePrecedente()"> Précédent</md-button>&nbsp;&nbsp;
    <md-button class="md-raised" @click="pageSuivante()">Suivant</md-button>&nbsp;

    <p>Page courante : {{page}}</p>
    <br>

<md-table>
        <md-table-row >
            <md-table-head>NOM</md-table-head>
            <md-table-head>CUISINE </md-table-head>
            <md-table-head>VILLE</md-table-head>
            <md-table-head>DETAILS</md-table-head>
            <md-table-head>SUPPRESSION</md-table-head>
        </md-table-row>
        
            <md-table-row 
                v-for="(r,index) in restaurants" 
                :key = "index"
                v-bind:style="{backgroundColor:getColor(index)}"
                v-bind:class="{bordureRouge:(index === 2)}">
                <md-table-cell>{{r.name}}</md-table-cell>
                <md-table-cell> {{r.cuisine}}</md-table-cell>
                <md-table-cell> {{r.borough}}</md-table-cell>
                <md-table-cell> 
                    <router-link :to="'/detail/' + r._id">Détail</router-link>
                    </md-table-cell>
                <md-table-cell> <md-button  class="md-raised" @click="supprimerRestaurant(r._id)" >Supprimer</md-button></md-table-cell>
            </md-table-row>
        
    </md-table>
  </div>
</template>

<script>
/*import _ from "lodash";*/
export default {
  name: 'LaListeDesRestaurants',
    data: function(){ 
          return{
             restaurants: [],
              nbRestaurants:0,
              nom: '',
              cuisine: '',
              ville: '',
              apiBaseURL:"http://localhost:8080/api/restaurants",
              nbPagesTotal: 0,
              page:0,
              nomRecherche:""
            }
        },
        mounted() {
            console.log("AVANT AFFICHAGE");
            this.getDataFromServer();
        },
        methods: {
            async getDataFromServer() {
                let url = this.apiBaseURL 
                + "?page=" + this.page
                + "&pagesize=" + this.pagesize
                + "&name=" + this.nomRecherche;

                try {
                    let reponseJSON = await fetch(url);
                    let reponseJS = await reponseJSON.json();
                    this.restaurants = reponseJS.data;
                    this.nbRestaurants = reponseJS.count;
                } catch(err) {
                    console.log("Erreur dans les fetchs GET " + err.msg);
                }  
            },
            async supprimerRestaurant(id) {
                try {
                    let reponseJSON = await fetch(this.apiBaseURL + "/" + id, {
                        method:"DELETE"
                    });
                    let reponseJS = await reponseJSON.json();
                    console.log("Restaurant supprime : " + reponseJS.msg);
                    this.getDataFromServer(); // on rafraichit l'affichage
                } catch(err) {
                    console.log("Erreur dans le fetchs DELETE " + err.msg);
                }
            },
            
            async ajouterRestaurant(event) {
                // eviter le comportement par defaut
                event.preventDefault();

                let donneesFormulaire = new FormData();
                donneesFormulaire.append("nom", this.nom);
                donneesFormulaire.append("cuisine", this.cuisine);
                donneesFormulaire.append("ville", this.ville);

                let reponseJSON = await fetch(this.apiBaseURL, {
                    method:"POST",
                    body:donneesFormulaire
                })
                let reponseJS = await reponseJSON.json();
                console.log(reponseJS.msg);

                this.nom = "";
                this.cuisine = "";
                this.ville = "";

                this.getDataFromServer(); // on rafraichit
            },
            getColor(index) {
                return (index % 2) ? 'lightBlue' : 'pink';
            },
            pageSuivante() {
                console.log("page suivante");
                this.page++;
                this.getDataFromServer();
            },
            pagePrecedente() {
                console.log("page precedente");
                this.page--;
                this.getDataFromServer();
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
    margin: auto;
    border: 1px solid black;
    width: 100%;
    border-collapse: collapse;
    
}
th{
  background-color: rgb(7, 128, 128);

  text-align: center;

}

td {
    border: 1px solid black;
    padding: 5px;
    
}
tbody td:nth-child(odd) {
  background-color: #ada9aa;
}

tbody td:nth-child(even) {
  background-color: #5a575a;
}

tr:hover, input:invalid ,input:valid 
{
    background-color: grey;
}


</style>
