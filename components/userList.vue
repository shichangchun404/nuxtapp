<template>
  <div id="userList">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <span>姓名：{{item.name}}</span>
        <span>年龄：{{item.age}}</span>
        <span>城市：{{item.city}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {name: 'shichangchun', age: 28, city: 'anqing'},
        {name: 'shichangchun', age: 28, city: 'anqing'},
        {name: 'shichangchun', age: 28, city: 'anqing'},
        {name: 'shichangchun', age: 28, city: 'anqing'},
      ]
    }
  }
}
</script>

