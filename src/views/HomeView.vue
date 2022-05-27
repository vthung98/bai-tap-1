<template>
  <div class="container">
   <div class="wrap-item">
     <div class="item1">
       <span>Tổng số học sinh</span>
       <span>{{ totalStudent }}</span>
     </div>
     <div class="item2">
       <span>Tổng số lớp:</span>
       <span>{{ totalClass }}</span>
     </div>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'

export default {
  name: 'HomeView',
  computed: mapGetters(['totalClass', 'totalStudent'])
  
}
</script>

<style scoped>
.wrap-item {
  margin-left: 40%;
  margin-top: 60px;
  width: 200px;
}
.item1 {
  margin: initial;
  display: flex;
  justify-content: space-between;
}
.item2 {
  margin: initial;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
</style>
