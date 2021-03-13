import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: []
        },
        options: {
            legend: { display: true },
            title: {
              display: true,
              text: 'PSI Twenty Four Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false
        },
        west: {
            label: "west",
            data: [],
            lineTension: 0,
            fill: false,
            borderColor: 'red'
        },
        
        national: {
            label: "national",
            data: [],
            lineTension: 0,
            fill: false,
          borderColor: 'blue'
        },
        
        east: {
            label: "east",
            data: [],
            lineTension: 0,
            fill: false,
            borderColor: 'purple'
        },
        
        central: {
            label: "central",
            data: [],
            lineTension: 0,
            fill: false,
          borderColor: 'pink'
        },

        south: {
            label: "south",
            data: [],
            lineTension: 0,
            fill: false,
            borderColor: 'yellow'
        },
        
        north: {
            label: "north",
            data: [],
            lineTension: 0,
            fill: false,
          borderColor: 'green'
        },
    }
  },
  methods: {
    fetchItems: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
        .then(response => {
            response.data.items.forEach(data => { 
                this.datacollection.labels.push(data.timestamp)
                this.west.data.push(data.readings.psi_twenty_four_hourly.west)
                this.national.data.push(data.readings.psi_twenty_four_hourly.national)
                this.east.data.push(data.readings.psi_twenty_four_hourly.east)
                this.central.data.push(data.readings.psi_twenty_four_hourly.central)
                this.south.data.push(data.readings.psi_twenty_four_hourly.south)
                this.north.data.push(data.readings.psi_twenty_four_hourly.north)

            })
            this.datacollection.datasets.push(this.west, this.national, this.east, this.central, this.south, this.north)
            this.renderChart(this.datacollection, this.options)
        })
    }
  },
  created () {
    this.fetchItems()
  }
}