<template>
  <div>
    my id is {{id}}
  </div>
</template>

<script>
export default {
  layout: 'userList',
  validate ({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  },
  data () {
    return {
      id: ''
    }
  },
  created () {
    console.log('_id page', this.$route)
    this.id =  this.$route.params.id
  },

}
</script>


