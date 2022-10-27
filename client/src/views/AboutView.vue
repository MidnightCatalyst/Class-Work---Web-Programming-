<script setup lang="ts">
  import { reactive } from 'vue'
  const items = [
  {name: 'Shoes', cost: 30},
  {name: 'Belt', cost: 20},
  {name: 'Socks', cost: 10},
  ]

  const cart = reactive([
    {name: 'Shoes', cost: 30, qty:1},
    {name: 'Belt', cost: 20, qty:1},

  ])


</script>

<template>
  <div class="about">
    <h1 class="title">This is an about page</h1>

    <ul>
      <li v-for="item in items" :key="item.name">
        {{item.name}} costs {{item.cost}}
        <em>${{item.cost}}</em>
      </li>
    </ul>

    <h2>Cart</h2>
    <table>
      <tr>
      <th>Item</th>
      <th>Price</th>
      <th>Qty</th>
      <th>Cost</th>

    </tr>
    <tr v-for="item in cart" :key="item.name">
      <td>{{item.name}}</td>
      <td>{{item.cost}}</td>
      <td><input v-model="item.qty"/></td>
      <td>{{item.cost * item.qty}}</td>
  </tr>
    </table>
  </div>
</template>

<style lang="scss">
ul{
  display: flex;
  
  li{
  width: 200px;
  padding: 5px;
  margin: 5px;
  }

}
</style>
