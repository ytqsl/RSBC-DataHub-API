<template>
<div class="form-group" :class="fg_class">
  <validation-provider :rules="rules" :name="id" v-slot="{ errors, required }">
    <label v-if="show_label" :for="id"><slot></slot>
      <span v-if="required" class="text-danger"> *</span>
    </label>
    <input type="text"
           class="form-control"
           :disabled="disabled || hasFormBeenPrinted"
           :id="id"
           :placeholder="placeholder"
           v-model="attribute">
    <div class="small text-danger">{{ errors[0] }}</div>
  </validation-provider>
</div>
</template>

<script>

import FieldCommon from "@/components/questions/FieldCommon";

export default {
  name: "EmailField",
  props: {
    placeholder: String,
  },
  mixins: [FieldCommon],

}
</script>
