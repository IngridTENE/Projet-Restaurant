<template>
  <div>
    <div>
      <small>Flat</small>
      <md-button>Default</md-button>
      <md-button :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-primary">Primary</md-button>
      <md-button class="md-accent">Accent</md-button>
      <md-button disabled>Disabled</md-button>
    </div>

    <div>
      <small>Raised</small>
      <md-button class="md-raised">Default</md-button>
      <md-button class="md-raised" :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-raised md-primary">Primary</md-button>
      <md-button class="md-raised md-accent">Accent</md-button>
      <md-button class="md-raised" disabled>Disabled</md-button>
    </div>

    <div>
      <small>Dense</small>
      <md-button class="md-dense md-primary">Flat</md-button>
      <md-button class="md-dense md-raised md-primary">Raised</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
