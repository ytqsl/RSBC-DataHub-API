<template>
  <div id="app" class="card border-0 ml-4 mr-4">
    <div class="container-fluid">
      <div id='primary-content' :class="primaryContentClass">

        <div id="roadsafety-header" class="card-header">
          <div class="d-flex justify-content-between">
            <a :href="`${publicPath}`" id="home"><img width="300px" :src="`${publicPath}assets/BCID_RoadSafetyBC_logo_transparent.png`" ></a>
            <div class="d-flex align-items-end flex-column">
              <div class="font-weight-bold text-warning">
                PILOT <span class="text-light small" id="app-version">{{ getAppVersion }}</span>
              </div>

              <div class="mt-auto small">
                <router-link to="/admin" v-if="isUserAnAdmin && isUserAnAdmin" class="text-white font-weight-bold" id="admin">
                  <span>Admin</span>
                </router-link>
                {{ getKeycloakUsername }}
                <div v-if="isUserAuthenticated" class="btn btn-light btn-sm ml-3" @click="$store.state.keycloak.logoutFn()">Logout</div>
              </div>
            </div>
          </div>

        </div>
        <not-logged-in-banner v-if="isDisplayNotLoggedInBanner"></not-logged-in-banner>
        <update-available></update-available>
        <div class="card-body">
          <offline-banner v-if="! $store.state.isOnline"></offline-banner>
          <router-view></router-view>
          <debug-component></debug-component>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
import UpdateAvailable from "@/components/UpdateAvailable";
import NotLoggedInBanner from "@/components/NotLoggedInBanner";
import OfflineBanner from '@/components/OfflineBanner'
import DebugComponent from "@/components/debugComponent";

export default {
  name: 'App',
  components: {DebugComponent, NotLoggedInBanner, OfflineBanner, UpdateAvailable},
  computed: {
    ...mapGetters([
        'getEnvironment',
        'getAppVersion',
        "getKeycloakUsername",
        "isUserAnAdmin",
        "isUserAuthenticated",
        "isDisplayNotLoggedInBanner"
    ]),
    primaryContentClass() {
      const env = this.getEnvironment;
      const contentClass = {
        "dev": 'dev-banner',
        "test": 'test-banner',
        "prod": ''
      }
      return contentClass[env]
    }
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }

}
</script>

<style>
.dev-banner {
  border-left: hotpink 12px solid;
}

.test-banner {
  border-left: yellow 12px solid;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: large;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: lightgray;
  margin-top: 60px;
}

.form-check {
    display: flex;
    align-items: center;
}
.form-check-label {
    margin-left: 10px;
}
.form-check .form-check-input[type=checkbox] {
    border-radius: .25em;
    height: 1.3em;
    width: 1.3em;
}
.form-check .form-check-input[type=radio] {
    border-radius: 25%;
    height: 1.3em;
    width: 1.3em;
}
.form-switch .form-check-input[type=checkbox] {
    border-radius: 1.3em;
    height: 1.3em;
    width: 1.3em;
}

.form-group label {
  font-size: medium;
  color: #343a40;
}

#roadsafety-header {
  background-color: #003366;

}

.row {
  margin: 0.5em 0.5em 0.5em 0.5em;
  padding: 0.5em 0.5em 0.5em 0.5em;
  vertical-align: center;

}

.lightgray {
    background-color: lightgray;
  }
.prohibition_number {
  color: red;
}

.btn-sm.btn-secondary[disabled] {
  background-color: darkgray;
  border-color: white;
}

::-webkit-scrollbar {
    width: 2em;
    height: 2em
}
::-webkit-scrollbar-button {
    background: #ccc
}
::-webkit-scrollbar-track-piece {
    background: #888
}
::-webkit-scrollbar-thumb {
    background: #eee
}

</style>
