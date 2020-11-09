<template>
  <div id="app">
     <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">LISTE DES RESTAURANTS</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>menu</md-icon>
            <span class="md-list-item-text">MENU</span>
          </md-list-item>

          <md-list-item>
          <md-icon>verified_user</md-icon>
            <span class="md-list-item-text">WELCOME</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
      <md-tabs md-sync-route>
      <md-icon>home</md-icon>
      <md-tab id="tab-home" md-label="Home" to="/components/tabs" exact></md-tab>
      <md-tab id="tab-pages" md-label="RESTAURANTS" to="/components/tabs/pages"></md-tab>
    </md-tabs>
    <router-link id ="home" to="/">HOME</router-link>
    &nbsp;
    <router-link id ="restaurant" to="/restaurant">LISTE DES RESTAURANTS</router-link>
    &nbsp;
    <router-view></router-view>
      </md-app-content>
    </md-app>
  <!--<div id= "tableau">
   <LaListeDesRestaurants/>
   </div>
  <div id= "menu">
   <Menu/>
   </div>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    /*LaListeDesRestaurants,
    Menu*/
    
  }
}
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
*/
  #home,#restaurant, #detail {
  text-align: center;
  font-size: 20px;
  color: white;
  background-color: darkcyan;

  
  }

  
</style>
