<template>
    <div>
      <form-row>
        <radio-field id="reason_for_not_impounding"
                     rules="required"
                     :path="path"
                     fg_class="col-sm-6"
                     :options='[["released", "Released to other driver"], ["roadside", "Left at roadside"]]'>
          Reason for not towing?</radio-field>
      </form-row>
      <form-row v-if="getAttributeValue(path, 'reason_for_not_impounding_released')">
        <text-field id="vehicle_released_to" rules="required"
                    :path="path + '/reason_for_not_impounding_released'"
                    fg_class="col-sm-6" >
          Vehicle Released To</text-field>
        <date-field id="released_date" :path="path + '/reason_for_not_impounding_released'"  fg_class="col-sm-3"
                  rules="required|validDt|notFutureDt|notGtYearAgo">Date Released</date-field>
        <time-field id="released_time" :path="path + '/reason_for_not_impounding_released'"  fg_class="col-sm-3"
                    rules="required|validTime|notFutureDateTime:@released_date">Time</time-field>
      </form-row>

    </div>
</template>

<script>

import CardsCommon from "@/components/forms/CardsCommon";
import { mapGetters } from 'vuex';


export default {
name: "VehicleImpoundmentCard",
mixins: [CardsCommon],
  computed: {
    ...mapGetters(["getAttributeValue"]),
    isReleasedToOtherDriver() {
      return this.getAttributeValue('reason_for_not_impounding') === "Released to other driver";
    },
  }
}
</script>

<style scoped>

</style>