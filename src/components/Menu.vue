<template>
  <div>
    <md-content>WELCOME</md-content>
    <md-content>HAPPY TO SEE YOU</md-content>
    <md-content class="md-primary">HOME</md-content>
    <md-content class="md-accent">MENU</md-content>
    <md-content class="md-accent">MADE YOUR CHOISE</md-content>
    <h2> </h2>
<md-card >
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img src="./image/image1.jpg" alt="image1" >
        </md-card-media>

        <md-card-header>
          <h2 class="md-title">Ingrid Restaurant</h2>
          <div class="md-subhead">
            <md-icon>location_on</md-icon>
            <span>26 Avenue des pins Nice</span>
          </div>
        </md-card-header>

        <md-card-content>
          the restaurant Ingrid offers Cameroonian specialties
        </md-card-content>
      </md-card-area>

      <md-card-content>
        <h3 class="md-subheading">Today's availability</h3>
        <div class="card-reservation">
          <md-icon>access_time</md-icon>
          <div class="md-button-group">
            <md-button>5:30PM</md-button>
            <md-button>7:30PM</md-button>
            <md-button>9:00PM</md-button>
          </div>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-primary">Reserve</md-button>
      </md-card-actions>
    </md-card>

    <md-card class="md-card-example">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img src="./image/image2.jpg" alt="image1" >
        </md-card-media>

        <md-card-header>
          <h2 class="md-title">African's Restaurant</h2>
          <div class="md-subhead">
            <md-icon>location_on</md-icon>
            <span>46 rue de la sorbone Paris</span>
          </div>
        </md-card-header>

        <md-card-content>
          several African specialties. 
          the best dishes of the congo, gabon, ivory coast.
        </md-card-content>
      </md-card-area>

      <md-card-content>
        <h3 class="md-subheading">Today's availability</h3>
        <div class="card-reservation">
          <md-icon>access_time</md-icon>
          <div class="md-button-group">
            <md-button>12:00AM</md-button>
            <md-button>7:30PM</md-button>
            <md-button>10:00PM</md-button>
          </div>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-primary">Reserve</md-button>
      </md-card-actions>
    </md-card>
    <md-card class="md-card-example">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img src="./image/image3.jpg" alt="image1" >
        </md-card-media>

        <md-card-header>
          <h2 class="md-title">speed burger</h2>
          <div class="md-subhead">
            <md-icon>location_on</md-icon>
            <span>80 jean medecin Nice</span>
          </div>
        </md-card-header>

        <md-card-content>
          home catering place your orders you will not be missed
        </md-card-content>
      </md-card-area>

      <md-card-content>
        <h3 class="md-subheading">Today's availability</h3>
        <div class="card-reservation">
          <md-icon>access_time</md-icon>
          <div class="md-button-group">
            <md-button>1:30PM</md-button>
            <md-button>6:00PM</md-button>
            <md-button>8:30PM</md-button>
          </div>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-primary">Reserve</md-button>
      </md-card-actions>
    </md-card>
    <md-card class="md-card-example">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img src="./image/image4.jpg" alt="image1" >
        </md-card-media>

        <md-card-header>
          <h2 class="md-title">LE BON PLAT</h2>
          <div class="md-subhead">
            <md-icon>location_on</md-icon>
            <span>47 avenue de plantier Nantes</span>
          </div>
        </md-card-header>

        <md-card-content>
          special offer, a menu buy an extra drink offered
        </md-card-content>
      </md-card-area>

      <md-card-content>
        <h3 class="md-subheading">Today's availability</h3>
        <div class="card-reservation">
          <md-icon>access_time</md-icon>
          <div class="md-button-group">
            <md-button>5:30PM</md-button>
            <md-button>7:30PM</md-button>
            <md-button>9:00PM</md-button>
          </div>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-primary">Reserve</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 10px;
    display: inline-block;
    vertical-align: top;
  }
  .md-content {
    width: 150px;
    height: 150px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
</style>
