<template>
  <div class="barchart">
    <h1>Bar Chart</h1>
    <chart></chart>
  </div>
</template>

<script>
import BarChart from "./BarChart.js";

export default {
  components: {
    "chart":BarChart
  }
};
</script>

<style>
    h1 {
        margin-top: 20px;
    }
</style>