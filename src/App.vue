<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/danh_sach_lop">Danh sách lớp</router-link> 
    <router-link to="/danh_sach_hoc_sinh">Danh sách học sinh</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  position: relative;;
  margin: 20px 40px 0px 40px;
  padding: 10px 0px;
  border: 1px solid #999999;
  background-color: #eeeeee
}

nav a {
  font-weight: 400;
  color: #2c3e50;
  margin-left: 40px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.container {
  margin: 0px 40px 40px 40px;
  background-color: #eeeeee;
  border: 1px solid #999999;
  min-height: 400px;
}

</style>
