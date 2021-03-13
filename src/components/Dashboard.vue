<template>
    <div>
    <ul>
        <li><router-link to="/" exact>Home </router-link></li>

        <li><router-link to="/orders" exact>Orders</router-link></li>
        <li><router-link to="/dashboard" exact>Dashboard</router-link></li>
    </ul>
        
    <div id="chart">
        <Barchart></Barchart>     
    </div>

    <div id="chart2">
        <Linechart></Linechart>     
    </div>
    

    </div>
</template>

<script>
import BarChart from './charts/BarChart.vue'
import LineChart from './CALLAPI.vue'


export default {
    components: {
        'Barchart':BarChart, 
        "Linechart":LineChart
    },
    
}
</script>>

<style scoped>
    ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    }
    li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    border: 1px solid #222;
    margin: 10px;
    }

    #main{
        content:"";
        display:table;
        clear:both;
    }
    #chart{
    height:500px;
    width:49%;
    border-style: solid;
    border-color:rgb(155, 84, 84);
    border-width: 1px;
    padding-bottom: 60px;
    float:left;
    }

    #chart2{
    height:500px;
    width:49%;
    border-style: solid;
    border-color:rgb(155, 84, 84);
    border-width: 1px;
    padding-bottom: 60px;
    float:right;
    }
</style>
