<template>
    <div>
        <button v-on:click="decrement">-</button> 
        <span>{{counter}}</span> 
        <button v-on:click="increment">+</button> 
    </div>    
</template>


<script>
    export default {
        data() {
            return {
                counter: 0,
            }
        },
        methods:{
            decrement:function(){
                if(this.counter > 0){
                    this.counter--;
                    this.$emit('counter', this.item, this.counter)                    
                }

            },
            increment:function(){
                if(this.counter == 10){
                    alert("You cannot buy more than 10 items");
                } else{
                    this.counter++;
                    this.$emit('counter', this.item, this.counter)
                }           
            }
        },
        props:{
            item:{
                type: Array
            }
        },
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
        font-size:30px;
        width:40px;
    }

    span {
        font-size:30px;
    }
</style>
