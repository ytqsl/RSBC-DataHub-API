import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons, ModalPlugin } from 'bootstrap-vue'
import { ValidationProvider } from 'vee-validate';
import router from '@/router'


import "@/config/custom_stylesheet.scss";
import {store} from "@/store/store.js"

import './registerServiceWorker'
//import constants from "@/config/constants";


Vue.use(Vuex)

// Make BootstrapVue components throughout your project
Vue.use(BootstrapVue)
Vue.use(ModalPlugin)
Vue.use(BootstrapVueIcons)


// import custom validation rules
require("@/helpers/validators");
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false


// Vue.use(VueKeyCloak, {
//   init: {
//     onLoad: 'check-sso',
//     pkceMethod: "S256",
//   },
//   config: constants.API_ROOT_URL + '/api/v1/keycloak',
//   onReady: () => {
//     store.commit("setKeycloak", Vue.prototype.$keycloak)
//   }
// });


new Vue({
  router,
  store: store,
  async created() {

    await store.dispatch("getAllFormsFromDB");
    await store.dispatch("downloadLookupTables")

    this.$store.subscribe((mutation) => {
      if (mutation.type === 'setKeycloak') {
        store.dispatch("getMoreFormsFromApiIfNecessary")
        // TODO - store.dispatch("renewFormLeasesFromApiIfNecessary")
        store.dispatch("fetchStaticLookupTables", {"resource": "user_roles", "admin": false})
        store.dispatch("fetchStaticLookupTables", {"resource": "users", "admin": false})
      }
      if (mutation.type === 'updateFormField' ||
          mutation.type === 'updateCheckBox' ||
          mutation.type === 'populateDriverFromICBC' ||
          mutation.type === 'populateVehicleFromICBC' ||
          mutation.type === 'typeAheadUpdate'
      ) {
        store.dispatch("saveCurrentFormToDB", store.state.currently_editing_form_object)
      }
    });

  },
  render: h => h(App),
}).$mount('#app')



