<template>
    <div class="card border-light bg-secondary">
      <div class="card-header text-white text-left font-weight-bold small pl-3 pt-1 pb-1 bg-primary">
        {{ form.full_name }}
      </div>
      <div class="card-body bg-light">
      <p class="card-text text-dark">{{ form.description }}</p>
      <p class="card-text">
        <small class="text-muted">
          IDs available: {{ getFormTypeCount[form.form_type] }}
        </small>
      </p>

          <router-link class="text-white" v-if="isFormAvailable" :to="{
            name: form.form_type,
            params: { id: getNextAvailableUniqueIdByType(form.form_type)}}">
              <button type="submit" class="btn btn-primary" :id="form.full_name">
                New {{ form.label }} Form
              </button>
          </router-link>
          <button type="submit" class="btn btn-primary" v-if="! isFormAvailable" :disabled="! isFormAvailable" :id="form.full_name">
            New {{ form.label }} Form
          </button>

    </div>
    </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "ProhibitionCard",
  props: {
      form: {}
  },
  computed: {
    ...mapGetters(["getFormTypeCount", "getNextAvailableUniqueIdByType"]),
    isFormAvailable() {
      return this.getFormTypeCount[this.form.form_type] > 0 && ! this.form.disabled
    }
  }
}
</script>
