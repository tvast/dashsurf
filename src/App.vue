<template>
  <div id="app">
  <!-- the router outlet, where all matched components would ber viewed -->

<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>

        <b-nav-item active><router-link v-bind:to="'/'">Home</router-link></b-nav-item>
    <b-nav-item><router-link v-bind:to="'/about'">About</router-link></b-nav-item>
    <b-nav-item><router-link v-bind:to="'/portfolio'">Portfolio</router-link></b-nav-item>



      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>


<router-view></router-view>

    <header>
      <span>Offline Masonary Gallery</span>
    </header>
    <main>
      <div class="wrapper">
        <div class="cards">
          <card v-for="collection in collections" :key="collection.imageId" :collection="collection"></card>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import cloudinary from 'cloudinary-core';
import data from './db.json';

import Card from './components/Card';

export default {
  name: 'app',
  data() {
    return {
      cloudinary: null,
      collections: []
    }
  },
  created() {
    this.cloudinary = cloudinary.Cloudinary.new({
      cloud_name: 'christekh'
    })
    this.collections = data.map(this.transform);
  },
  methods: {
  transform(collection) {
    const imageUrl =
      this.cloudinary.url(collection.imageId, { width: 300, crop: "fit" });
    return Object.assign(collection, { imageUrl });
  }
},
}
</script>
<!-- styling for the component -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
