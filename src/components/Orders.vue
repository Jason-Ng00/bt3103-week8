<template>
   <div>
    <ul>
        <li><router-link to="/" exact>Home </router-link></li>

        <li><router-link to="/orders" exact>Orders</router-link></li>
        <li><router-link to="/dashboard" exact>Dashboard</router-link></li>

    </ul>

    <ul>
        <li v-for="order in orders" :key="order.id">
            <ul>
                <li id="orderList" v-for="(qty, name) in order.order" :key="qty">
                        {{name}} x {{qty}}
                </li>
            </ul>

            <button v-on:click="deleteItem($event)" v-bind:id="order.id">Delete</button> 
            <button v-on:click="route($event)" v-bind:id="order.id">Modify</button> 

        </li>
    </ul>
    </div>
</template>

<script>
    import database from "../firebase.js";

    export default {
        data() {
            return {
                orders:[]
            }
        },

        methods: {
            fetchItems: function(){
                database.collection("orders").get().then((querySnapShot)=>{
                    let item={}
                    querySnapShot.forEach(doc=>{
                        item=doc.data()
                        this.orders.push({id:doc.id, order:item})
                    })
                })

            },

            deleteItem: function(event) {
                let doc_id = event.target.getAttribute("id")
                database.collection("orders").doc(doc_id).delete().then(() => {location.reload()});
            },

            route: function(event) {
                let doc_id = event.target.getAttribute("id")
                this.$router.push({path:"/modify", query: {docid: doc_id}})
            },

        },
        
        created(){
            this.fetchItems()
        }

    }
</script>

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

    button {
    width: 65px;
    height: 30px;
    background-color: #f7cac9;
    border-radius: 10px;
    border-width: 1px;
    }

    #orderList {
        border:none;
        margin:0px;
    }
</style>
