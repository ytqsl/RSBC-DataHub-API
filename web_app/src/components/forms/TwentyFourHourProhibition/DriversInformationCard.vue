<template>
<form-card title="Driver's Information">
    <form-row>
      <driver-licence-number id="drivers_number" :path="path"  :rules="bcdlNumberRules">Driver's Licence Number</driver-licence-number>
      <jurisdiction-field id="drivers_licence_jurisdiction" :path=path fg_class="col-sm-3">Prov / State / International</jurisdiction-field>
    </form-row>
    <form-row>
      <text-field id="last_name" :path=path fg_class="col-sm-4" placeholder="Last Name" rules="required|max:20">Last Name</text-field>
      <text-field id="first_name" :path=path fg_class="col-sm-4" placeholder="Given Names" rules="max:20">Given Names</text-field>
      <dob-field id="dob" :path=path fg_class="col-sm-4">Date of Birth</dob-field>
    </form-row>
    <form-row>
      <text-field id="address1" :path=path fg_class="col-sm-12" placeholder="Address" rules="required|max:25">Address</text-field>
    </form-row>
    <form-row>
      <text-field id="city" :path=path fg_class="col-sm-6" rules="required|max:15">City</text-field>
      <province-field id="province" :path=path fg_class="col-sm-2" rules="required">Prov / State</province-field>
      <text-field id="postal" :path=path fg_class="col-sm-4">Postal / Zip</text-field>
    </form-row>
</form-card>
</template>

<script>
import CardsCommon from "@/components/forms/CardsCommon";
export default {
  name: "DriversInformationCard",
  mixins: [CardsCommon],
}
</script>
