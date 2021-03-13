<template>
    <div>
        <ul>
            <p>Menu</p>
            <li v-for="item in itemsSelected" :key="item.name">
                <p>{{item[0]}} x {{item[1]}}</p>
            </li>
        </ul>
        <button v-on:click="sendOrder(); findTotal();">Add Order</button> 
        <p v-show="calculate">Subtotal: ${{total}}</p>
        <p v-show="calculate">Grand Total: ${{gTotal}}</p>
    </div>
</template>


<script>
    import database from "../firebase.js"

    export default {
        data() {
            return {
                total : 0,
                calculate : false,
                gTotal : 0,
                myItems: {}
            }
        },
        props:{
            itemsSelected: {
                type: Array
            }
        },
        methods: {
            findTotal:function(){
                this.total = 0;
                for(let i = 0; i < this.itemsSelected.length; i++){
                    this.total += this.itemsSelected[i][1] * this.itemsSelected[i][2];                    
                }      
                this.calculate = true;       
            },

            sendOrder:function(){
                for(let i = 0; i < this.itemsSelected.length; i++){
                    this.myItems[this.itemsSelected[i][0]] = this.itemsSelected[i][1]
                } 
                
                database.collection('orders').add(this.myItems).then(() => {location.reload()});
            }
        },
        watch:{
            total: function(){
                this.gTotal = (this.total * 1.07).toFixed(2);
            } 
        }

    }
</script>

<style scoped>
    button{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;  
        text-align: center;
        color: #bb0d38a8;
        margin:15px;
        color:black;
        background-color: pink;
        border-radius:5px;
        width:120px;
        height:30px;
    }

</style>
