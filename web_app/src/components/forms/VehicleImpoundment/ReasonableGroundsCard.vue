<template>
<form-card title="Reasonable Grounds">
    <div>
      <shadow-box>
        <form-row>
          <text-field id="offence_address" :path=path fg_class="col-sm-8" rules="required|max:22">Intersection or Address of Offence</text-field>
          <offence-city :path=path fg_class="col-sm-4">City</offence-city>
        </form-row>
        <form-row>
          <text-field id="file_number" :path=path fg_class="col-sm-3" rules="required">Agency File #</text-field>
          <date-field id="prohibition_start_date" :path=path fg_class="col-sm-5"
                      rules="required|validDt|notFutureDt|notGtYearAgo">
            Date of Driving, care or control
          </date-field>
          <time-field id="prohibition_start_time" :path=path fg_class="col-sm-4"
                      rules="required|validTime|notFutureDateTime:@prohibition_start_date">
            Time
          </time-field>
        </form-row>
      </shadow-box>
      <shadow-box>
        <p>7-Day Impoundment for the following reason(s)
            <span class="text-muted">Section 251 and 253 of the Motor Vehicle Act</span>
        </p>
        <form-row>
          <in-line-check-box id="reason_excessive_speed" :path=path :option="true">Excessive Speed
            <span class='text-muted'>- Committing an offence under section 148 of the Motor Vehicle Act</span>
          </in-line-check-box>
        </form-row>
        <form-row>
          <in-line-check-box id="reason_prohibited" :path=path :option="true">Prohibited
            <span class='text-muted'>- Driving while prohibited under the Motor Vehicle Act,
                "Criminal Code, Youth Justice Act or Youth Criminal Justice Act (Canada).</span>
          </in-line-check-box>
        </form-row>
        <form-row>
          <in-line-check-box id="reason_suspended" :path=path :option="true">Suspended
            <span class='text-muted'>- Driving while suspended under section 89 or section
                232 of the Motor Vehicle Act.</span>
          </in-line-check-box>
        </form-row>
        <form-row>
          <in-line-check-box id="reason_racing" :path=path :option="true">Street Racing
            <span class='text-muted'>- Driving or operating a motor vehicle in a race as
                defined in the Motor Vehicle Act and the officer intends to charge with an offence.</span>
          </in-line-check-box>
        </form-row>
        <form-row>
          <in-line-check-box id="reason_stunt" :path=path :option="true">Stunt Driving
            <span class='text-muted'>- Driving or operating a motor vehicle in a stunt as
                defined in the Motor Vehicle Act and the officer intends to charge with an offence.</span>
          </in-line-check-box>
        </form-row>
        <form-row>
          <in-line-check-box id="reason_motorcycle_seating" :path=path :option="true">Motorcycle (seating)
            <span class='text-muted'>- Committing an offence under section 194 (1)
                or (2) of the Motor Vehicle Act.</span>
          </in-line-check-box>
        </form-row>
        <form-row>
          <in-line-check-box id="reason_motorcycle_restrictions" :path=path :option="true">Motorcycle (restrictions)
            <span class='text-muted'>- Committing an offence under section 25(15) of the Motor Vehicle Act
              relating to a restriction or condition of a motorcycle learner or novice driver’s licence.</span>
          </in-line-check-box>
        </form-row>
        <form-row>
          <in-line-check-box id="reason_unlicensed" :path=path :option="true">Unlicensed (UL)
            <span class='text-muted'> - Driving without a valid driver’s licence and with a notice on
               the driving record indicating a previous conviction for driving while unlicensed.</span>
          </in-line-check-box>
        </form-row>
        <form-row v-if="getAttributeValue(this.path,'reason_unlicensed_true')">
          <text-field  id="ul_prohibition_number" :path="path + '/reason_unlicensed_true'" fg_class="col-sm-6">
            UL Prohibition Number
          </text-field>
        </form-row>
        <form-row v-if="getAttributeValue(this.path, 'reason_unlicensed_true')">
          <radio-field  id="suspected_bc_resident" :path="path + '/reason_unlicensed_true'" :options="[['yes', 'Yes'], ['no', 'No']]">
            Does the officer have grounds to believe that the Driver resides in British Columbia? (explain in incident details)
          </radio-field>
        </form-row>
      </shadow-box>
    </div>
</form-card>
</template>

<script>
import CardsCommon from "@/components/forms/CardsCommon";
import InLineCheckBox from "@/components/questions/InLineCheckBox";

export default {
  name: "ReasonableGroundsCard",
  components: {InLineCheckBox},
  mixins: [CardsCommon],
}
</script>