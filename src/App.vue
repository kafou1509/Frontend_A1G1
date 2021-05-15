<template><!-- eslint-disable max-len -->
<v-app id="inspire">
  <v-navigation-drawer color="#1A1A1A" fixed v-model="drawer" permanent :mini-variant.sync="drawer" app>
    <v-btn absolute right fab @click="drawer = !drawer" :style="{color:white,top: '50%', transform:'translate(75%, -50%)'}">
      <v-icon v-if="drawer">mdi-chevron-right</v-icon>
      <v-icon v-else>mdi-chevron-left</v-icon>
    </v-btn>
    <v-list dense>
      <!-- vnav images-->
      <v-flex align-self-center="true" class="center">
        <v-img :src="logo" max-height="150" max-width="150" class="center"></v-img>
      </v-flex>
      <br>
      <router-link v-bind:to="{ name: 'Home' }" class="side_bar_link">
        <v-list-item>
          <v-list-item-action>
            <v-icon style="color:white">home</v-icon>
          </v-list-item-action>
          <v-list-item-content id="imp" style="color:white">Dashboard</v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link v-bind:to="{ name: 'Contact' }" class="side_bar_link">
        <v-list-item>
          <v-list-item-action>
            <v-icon style="color:white">mdi-briefcase</v-icon>
          </v-list-item-action>
          <v-hover v-slot="{ hover }">
            <v-list-item-content id="imp" style="color:white">Job offer</v-list-item-content>
          </v-hover>
        </v-list-item>
      </router-link>
      <router-link v-bind:to="{ name: 'Contact' }" class="side_bar_link">
        <v-list-item>
          <v-list-item-action>
            <v-icon style="color:white">mdi-cogs</v-icon>
          </v-list-item-action>
          <v-list-item-content id="imp" style="color:white">Upgrade</v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link v-bind:to="{ name: 'Contact' }" class="side_bar_link">
        <v-list-item>
          <v-list-item-action>
            <v-icon style="color:white">mdi-account-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content id="imp" style="color:white">Profile</v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar color="#FFC600" dark fixed app>
    <v-app-bar-nav-icon style="color:#1A1A1A" @click.stop="drawer = !drawer">
    </v-app-bar-nav-icon>
    <v-toolbar-title style="color:#1A1A1A">Dashboard</v-toolbar-title>

    <b-nav-item-dropdown right no-caret>
      <!-- Using 'button-content' slot -->
      <template #button-content>
        <v-avatar id="avatar" color="#1A1A1A" size="40"></v-avatar>
      </template>
      <b-dropdown-item href="#" class="d-flex align-items-center">
        Profile
      </b-dropdown-item>
      <b-dropdown-item href="#" class="d-flex align-items-center">
        Settings
      </b-dropdown-item>
      <b-dropdown-item href="#" class="d-flex align-items-center">
        Sign out
      </b-dropdown-item>
    </b-nav-item-dropdown>
  </v-app-bar>
  <v-main>
    <v-container fluid>
      <div id="app">
        <router-view />
      </div>
    </v-container>
  </v-main>
  <v-footer color="#FFC600" app>
    <span style="color:#1A1A1A">&copy;Job Hunter 2021</span>
  </v-footer>
</v-app>
</template>

<script>
import './assets/stylesheets/main.css';
import foot1 from './assets/logonav.png';

// eslint-disable-next-line
export default { //import { mdiCogs } from '@mdi/js';
  data: () => ({
    drawer: null,
    logo: foot1,
  }),
  props: {
    source: String,
  },
};
</script>
