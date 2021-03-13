import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: ["Pork Fried Rice", "Mapo Tofu", "Sambal KangKung", "Cereal Prawn", "Dry Beef Hor Fun", "Prawn omelette"],
            datasets: [{
                label: "Quantity",
                backgroundColor: ["red", "blue", "green", "blue", "red", "blue"],
                data: [5, 5 ,3 ,1, 2, 2],
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total number of each dish'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
      database.collection('orders').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
            for (const [key, value] of Object.entries(doc.data())) {
                for(var i = 0; i < 6; i++){
                    // alert(String(key).slice(1,-1))
                    // alert(this.datacollection.labels[i])
                    // alert(String(key).slice(1,-1) === this.datacollection.labels[i])
                    if (String(key).slice(1,-1) === this.datacollection.labels[i]){
                        this.datacollection.datasets[0].data[i] = this.datacollection.datasets[0].data[i] + value
                    }
                }
            }
        })
        //alert(JSON.stringify(this.datacollection))
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}
