<template>
  <div class="mb-xlg">
    <Widget
      class="h-100"
      bodyClass="p-0 mt-0"
    >
      <div class="d-flex justify-content-between flex-wrap px-4">
        <h5 class='d-flex align-items-center pb-1 bigStatTitle'>
          <span :class="`circle bg-${color} mr-sm`" :style="{ fontSize: '6px' }" />
            <span class="fw-normal ml-xs">{{product}}</span>
        </h5>
        <b-dropdown :text="text" variant="default" size="sm" style='background-color: #fff !important;'>
          <b-dropdown-item-button @click="changeText('Daily')" style='background-color: #fff !important;'>Daily</b-dropdown-item-button>
          <b-dropdown-item-button @click="changeText('Weekly')" style='background-color: #fff !important;'>Weekly</b-dropdown-item-button>
          <b-dropdown-item-button @click="changeText('Yearly')" style='background-color: #fff !important;'>Yearly</b-dropdown-item-button>
        </b-dropdown>
      </div>
      <div class="px-5">
        <h5 class="fw-semi-bold mb-lg mt-sm">{{total}} users</h5>
        <div class="d-flex">
          <div class="w-50 py-3 pr-2">
            <div class="d-flex align-items-start">
              <h6>+{{registrations.value}}</h6>
              <i
                :class="`la la-arrow-right la-lg ml-sm text-${registrations.profit ? 'primary' : 'danger'}
                rotate-${registrations.profit ? '315' : '45'}`"
              />
            </div>
            <p class="text-muted mb-0 mr"><small>Registrations</small></p>
          </div>
          <div class="w-50 py-3 pl-2">
            <div class="d-flex align-items-start">
              <h6>{{bounce.value}}$</h6>
              <i
                :class="`la la-arrow-right la-lg ml-sm text-${bounce.profit ? 'primary' : 'danger'}
                rotate-${bounce.profit ? '315' : '45'}`"
              />
            </div>
            <p class="text-muted mb-0 mr"><small>Total $ worth ETH</small></p>
          </div>
        </div>
        <div class='mb-5'>
          <div class='mb-2' style='width:100%;text-align:left;'><img :src="`${image}`" style='margin:0px auto; width:90%;border-radius:8px;border:1px solid #000;height:140px;' /></div>
          <span class='mt-3' style='padding-top:10px;width:90%;font-size:12px;color:#666;'> {{description}} </span>
        </div>
      </div>
    </Widget>
  </div>
</template>

<script>
import Vue from 'vue';
import Widget from '@/components/Widget/Widget';

export default {
  name: 'BigStat',
  props: ['product', 'color', 'total', 'registrations', 'bounce', 'image', 'description'],
  components: { Widget },
  data() {
    return {
      text: 'Daily',
    };
  },
  methods: {
    changeText(text) {
      Vue.set(this, 'text', text);
    },
  },
};
</script>

<style src="./BigStat.scss" lang="scss" scoped />
