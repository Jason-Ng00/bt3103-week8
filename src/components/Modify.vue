<template>
   <div>

    <ul>
        <li v-for="(qty, name) in datapacket" :key="name">
            {{name}} : {{qty}} <br><br>
            <input :id="name" type="number" min="0" placeholder="0" required/>
        </li>
    </ul>
    <button v-on:click="updateOrder()">Update Order</button> 
    </div>
</template>

<script>
    import database from "../firebase.js";

    export default {
        data() {
            return {
                datapacket:{},
                newQty: 0,
                newOrder:{}
            }
        },

        methods: {
            fetchItems: function(){
                database.collection('orders').doc(this.$route.query.docid).get()
        .then(snapshot => {if (!snapshot.exists) alert(2);this.datapacket=snapshot.data()})
            },

            updateOrder: function() {
                this.newOrder = {}
                for (var i=0; i<Object.keys(this.datapacket).length; i++){
                    var key = Object.keys(this.datapacket)[i]
                    var tempQty = document.getElementById(key).value;
                    this.newOrder[key] = tempQty;
                }
                database.collection("orders").doc(this.$route.query.docid).update(this.newOrder).then(() => {this.$router.push("/orders");location.reload()});
            }
        },
        
        created(){
            this.fetchItems()
        }

    }
</script>

<style scoped>
    ul {
    list-style-type: none;
    padding: 0;
    }
    li {
    text-align: left;
    padding: 10px;
    margin: 10px;
    }
    button {
    width: 100px;
    height: 30px;
    background-color: #f7cac9;
    border-radius: 10px;
    border-width: 1px;
    margin-left:30px;
    float: left;
    }


</style>
